import { Injectable, NestMiddleware } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response, NextFunction } from 'express'
import firebase, { app, FirebaseError } from 'firebase-admin'
import { startsWith, isEmpty } from 'lodash'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private firebaseApp: app.App

  constructor(private configService: ConfigService) {
    this.firebaseApp = firebase.initializeApp({
      credential: firebase.credential.cert({
        projectId: this.configService.get('FIREBASE_PROJECT_ID'),
        privateKey: this.configService
          .get('FIREBASE_PRIVATE_KEY')
          .replace(/\\n/g, '\n'),
        clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
      }),
      databaseURL: this.configService.get('FIREBASE_DATABASE_URL'),
    })
  }

  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization

    if (!startsWith(authorization, 'Bearer')) {
      this.denyAccess(req, res)
      return
    }

    const token = authorization.replace('Bearer ', '')

    if (isEmpty(token)) {
      this.denyAccess(req, res)
      return
    }

    this.firebaseApp
      .auth()
      .verifyIdToken(token)
      .then(async (decodedIdToken) => {
        req['user'] = {
          uid: decodedIdToken.uid,
          email: decodedIdToken.email,
        }
        next()
      })
      .catch((error: FirebaseError) => {
        console.error(error)
        this.denyAccess(req, res)
      })
  }

  private denyAccess(req: Request, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: req.url,
      message: 'Access denied',
    })
  }
}

import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response, NextFunction } from 'express'
import firebase, { app } from 'firebase-admin'
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
      throw new UnauthorizedException()
    }

    const token = authorization.replace('Bearer ', '')

    if (isEmpty(token)) {
      throw new UnauthorizedException()
    }

    this.firebaseApp
      .auth()
      .verifyIdToken(token)
      .then(async (decodedIdToken) => {
        req.user = {
          uid: decodedIdToken.uid,
          email: decodedIdToken.email,
        }
        next()
      })
      .catch(() => {
        throw new ForbiddenException()
      })
  }
}

import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import firebase from 'firebase-admin'
import { replace, trim, startsWith, isEmpty } from 'lodash'
import { getFirebaseApp } from 'lib/firebase'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private firebaseApp: firebase.app.App

  constructor() {
    this.firebaseApp = getFirebaseApp()
  }

  use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization

    if (!startsWith(authorization, 'Bearer')) {
      throw new UnauthorizedException()
    }

    const token = trim(replace(authorization, 'Bearer', ''))

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

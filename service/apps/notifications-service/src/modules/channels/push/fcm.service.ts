import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from '../../../firebase-service-account.json';

@Injectable()
export class FcmService {
  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as any),
      });

      console.log('🔥 Firebase initialized successfully');
    }
  }

  async send(token: string, title: string, body: string) {
    const message = {
      token,
      notification: {
        title,
        body,
      },
    };

    return admin.messaging().send(message);
  }
}

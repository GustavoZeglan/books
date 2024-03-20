import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { FirebaseApp, initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

@Injectable()
export class FirebaseService {
  app: FirebaseApp;
  constructor() {
    if (!getApps().length) {
      const serviceAccount = JSON.parse(process.env.FIREBASE);
      firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      });

      this.app = initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      });
    }
  }

  getAuth = (): firebase.auth.Auth => {
    return firebase.auth();
  };

  getFirebaseAuth = (): firebaseAuth.Auth => {
    return firebaseAuth.getAuth(this.app);
  };

  firestore = (): firebase.firestore.Firestore => {
    return firebase.firestore();
  };
}

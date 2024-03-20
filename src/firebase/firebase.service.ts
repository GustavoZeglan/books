import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";
import { getApps } from "firebase-admin/app";

@Injectable()
export class FirebaseApp {
  constructor() {
    if (!getApps().length) {
      const serviceAccount = JSON.parse(process.env.FIREBASE);
      firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      });
    }
  }

  getAuth = (): firebase.auth.Auth => {
    return firebase.auth();
  };

  firestore = (): firebase.firestore.Firestore => {
    return firebase.firestore();
  };
}

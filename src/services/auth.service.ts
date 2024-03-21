import { Inject, Injectable } from "@nestjs/common";
import { firestore } from "firebase-admin";
import { Auth } from "firebase-admin/lib/auth/auth";
import * as firebaseAuth from "firebase/auth";
import { FirebaseService } from "src/firebase/firebase.service";

@Injectable()
export class AuthService {
  auth: Auth;
  clientAuth: firebaseAuth.Auth;
  firestore: firestore.Firestore;
  constructor(
    @Inject(FirebaseService) private readonly firebase: FirebaseService,
  ) {
    this.auth = firebase.getAuth();
    this.clientAuth = firebase.getFirebaseAuth();
    this.firestore = firebase.firestore();
  }

  async login(
    email: string,
    password: string,
  ): Promise<firebaseAuth.UserCredential> {
    return await firebaseAuth.signInWithEmailAndPassword(
      this.clientAuth,
      email,
      password,
    );
  }

  async signup(name: string, email: string, password: string) {
    await firebaseAuth.createUserWithEmailAndPassword(
      this.clientAuth,
      email,
      password,
    );
  }
}

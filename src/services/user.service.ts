import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";

@Injectable()
export class UserService {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection("user");

  public async createUser(user: object) {
    await this._collectionRef.add(user);
  }
}

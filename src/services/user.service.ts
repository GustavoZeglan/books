import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";

@Injectable()
export class UserService {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection("user");

  public async createUser(name: string) {
    await this._collectionRef.add({ name: name });
  }
}

import { Injectable } from "@nestjs/common";
import * as firebase from "firebase-admin";

@Injectable()
export class GenresService {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection("genres");

  public async insertGenre() {
    await this._collectionRef.add({ name: "Romance" });
  }
}

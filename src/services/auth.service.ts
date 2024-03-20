import { Inject, Injectable } from "@nestjs/common";
import { Auth } from "firebase-admin/lib/auth/auth";
import { FirebaseApp } from "src/firebase/firebase.service";

@Injectable()
export class AuthService {
  auth: Auth;
  constructor(@Inject(FirebaseApp) private readonly firebase: FirebaseApp) {
    this.auth = firebase.getAuth();
  }

  async signup(name: string, email: string, password: string): Promise<void> {
    const user = { name, email, password };
    await this.auth.createUser(user);
  }
}

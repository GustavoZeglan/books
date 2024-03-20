import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirebaseService } from "./firebase/firebase.service";
import { AuthModule } from "./modules/auth.module";
import { GenresModule } from "./modules/genres.module";
import { UserModule } from "./modules/user.module";

@Module({
  imports: [GenresModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}

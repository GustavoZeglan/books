import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirebaseApp } from "./firebase/firebase.service";
import { AuthModule } from "./modules/auth.module";
import { GenresModule } from "./modules/genres.module";

@Module({
  imports: [GenresModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, FirebaseApp],
})
export class AppModule {}

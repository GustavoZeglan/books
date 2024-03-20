import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { FirebaseService } from "src/firebase/firebase.service";
import { authSchema } from "src/schema/authSchema";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";
import { ZodValidationMiddleware } from "src/shared/middlewares/zodValidation";
import { UserModule } from "./user.module";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService, FirebaseService, UserService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ZodValidationMiddleware(authSchema))
      .forRoutes("/auth/signup");

    consumer
      .apply(ZodValidationMiddleware(authSchema.omit({ name: true })))
      .forRoutes("/auth/login");
  }
}

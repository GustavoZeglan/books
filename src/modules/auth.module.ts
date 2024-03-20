import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthController } from "src/controllers/auth.controller";
import { FirebaseApp } from "src/firebase/firebase.service";
import { authSchema } from "src/schema/authSchema";
import { AuthService } from "src/services/auth.service";
import { ZodValidationMiddleware } from "src/shared/middlewares/zodValidation";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, FirebaseApp],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ZodValidationMiddleware(authSchema))
      .forRoutes("/auth/signup");
  }
}

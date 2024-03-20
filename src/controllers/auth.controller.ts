import { Body, Controller, Inject, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { authSchema } from "src/schema/authSchema";
import { AuthService } from "src/services/auth.service";

@Controller("/auth")
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post("/signup")
  async signUp(@Body() body, @Res() res: Response): Promise<void> {
    const newBody = authSchema.parse(body);

    this.authService
      .signup(newBody.name, newBody.email, newBody.password)
      .then((resp) => {
        return res.status(200).json(resp);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

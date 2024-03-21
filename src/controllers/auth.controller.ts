import { Body, Controller, Inject, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthInterface } from "src/interfaces/authInterface";
import { authSchema } from "src/schema/authSchema";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";

@Controller("/auth")
export class AuthController {
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(UserService) private readonly userService: UserService,
  ) {}

  @Post("/login")
  async login(@Body() body: any, @Res() res: Response) {
    const newBody = authSchema.parse(body);

    try {
      await this.authService
        .login(newBody.email, newBody.password)
        .then((resp: AuthInterface) => {
          return res.status(200).json(resp.user.uid);
        })
        .catch(() => {
          return res.status(400).json({
            error: "Erro ao fazer login",
            details: "E-mail ou senha incorretos",
          });
        });
    } catch (err) {
      console.error(err);
    }
  }

  @Post("/signup")
  async signUp(@Body() body, @Res() res: Response) {
    const newBody = authSchema.parse(body);

    this.authService
      .signup(newBody.name, newBody.email, newBody.password)
      .then(async () => {
        const user = {
          uid: this.authService.clientAuth.currentUser.uid,
          name: newBody.name,
          email: newBody.email,
        };
        await this.userService
          .createUser(user)
          .then(() => {
            return res
              .status(200)
              .json({ message: "Usuário criado com sucesso" });
          })
          .catch(() => {
            return res.status(400).json({
              error: "Erro ao cadastrar usuário",
              details: "Usuário informado já cadastrado!",
            });
          });
      })
      .catch(() => {
        return res.status(400).json({
          error: "Erro ao cadastrar usuário",
          details: "Usuário informado já cadastrado!",
        });
      });
  }
}

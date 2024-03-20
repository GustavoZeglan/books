import * as z from "zod";

export const authSchema = z.object({
  name: z
    .string({ required_error: "O nome do usuário é obrigatório" })
    .min(3, "O nome do usuário precisa ter no minimo 3 caracteres"),
  email: z
    .string({
      required_error: "O email do usuário é obrigatório",
    })
    .email("O email precisa ser válido"),
  password: z
    .string({ required_error: "A senha do usuário é obrigatória" })
    .min(8, "A senha do usuário precisa ter no minimo 8 caracteres"),
});

import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const ZodValidationMiddleware = (schema: z.ZodType<any>) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      const zodError = error as z.ZodError;
      const errorMessage = zodError.errors.map((err) => err.message);
      return res
        .status(400)
        .json({ error: "Erro de validação", details: errorMessage });
    }
  };
};

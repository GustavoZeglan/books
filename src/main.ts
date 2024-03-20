import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { config } from "dotenv";
import * as swaggerUi from "swagger-ui-express";
import { AppModule } from "./app.module";
import * as swaggerDocument from "./swagger.json";

config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  await app.listen(3000);
}

bootstrap();

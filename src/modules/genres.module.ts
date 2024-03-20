import { Module } from "@nestjs/common";
import { GenresController } from "src/controllers/genres.controller";
import { GenresService } from "src/services/genres.service";

@Module({
  imports: [],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}

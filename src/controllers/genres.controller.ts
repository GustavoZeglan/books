import { Controller, Get } from "@nestjs/common";
import { GenresService } from "src/services/genres.service";

@Controller()
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get("/genres/insert")
  insertGenre() {
    const data = this.genresService.insertGenre();
    return data;
  }
}

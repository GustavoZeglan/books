import { Module } from "@nestjs/common";
import { UserService } from "src/services/user.service";

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}

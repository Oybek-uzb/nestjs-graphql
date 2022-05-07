import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./models/user";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {

    }

   @Query(() => User, { name: "user", nullable: true })
   getUser(): User {
       return this.usersService.getUser() 
   }
}
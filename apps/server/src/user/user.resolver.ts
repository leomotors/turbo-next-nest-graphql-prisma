import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { FindManyUserArgs } from "@generated/user/find-many-user.args";
import { User } from "@generated/user/user.model";

import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query(() => [User])
  users(@Args() args: FindManyUserArgs) {
    return this.service.findMany(args);
  }

  @Query(() => Int)
  userCount() {
    return this.service.userCount();
  }
}

import { Injectable } from "@nestjs/common";

import { FindManyUserArgs } from "@generated/user/find-many-user.args";

import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  findMany(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  userCount() {
    return this.prisma.user.count();
  }
}

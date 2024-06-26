import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { Repository } from "src/database/repositories/repository"
import { PrismaService } from "src/database/prisma/prisma.service"
import { DelegateArgs } from "src/database/types/delegate-args.type"
import { DelegateReturnTypes } from "src/database/types/delegate-return-types.type"

type TopicDelegate = Prisma.TopicDelegate<any>

export type TopicCreateInput = Prisma.TopicCreateInput
export type TopicCreateManyInput = Prisma.TopicCreateManyInput
export type TopicUpdateInput = Prisma.TopicUpdateInput

@Injectable()
export class TopicRepository extends Repository<
  TopicDelegate,
  DelegateArgs<TopicDelegate>,
  DelegateReturnTypes<TopicDelegate>
> {
  constructor(private prisma: PrismaService) {
    super(prisma.topic)
  }
}

import { Injectable } from "@nestjs/common"
import { Prisma } from "@prisma/client"
import { Repository } from "src/database/repositories/repository"
import { PrismaService } from "src/database/prisma/prisma.service"
import { DelegateArgs } from "src/database/types/delegate-args.type"
import { DelegateReturnTypes } from "src/database/types/delegate-return-types.type"

type TopicLinkDelegate = Prisma.ContextDelegate<any>

export type TopicLinkCreateInput = Prisma.ContextCreateInput
export type TopicLinkCreateManyInput = Prisma.ContextCreateManyInput
export type TopicLinkUpdateInput = Prisma.ContextUpdateInput

@Injectable()
export class TopicLinkRepository extends Repository<
  TopicLinkDelegate,
  DelegateArgs<TopicLinkDelegate>,
  DelegateReturnTypes<TopicLinkDelegate>
> {
  constructor(private prisma: PrismaService) {
    super(prisma.context)
  }
}

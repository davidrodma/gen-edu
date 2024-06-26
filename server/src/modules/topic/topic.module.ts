import { Module } from "@nestjs/common"
import { TopicService } from "./services/topic.service"
import { PrismaModule } from "src/database/prisma/prisma.module"
import { TopicRepository } from "./repositories/topic.repository"
import { TopicController } from "./controllers/topic.controller"
import { ConfigModule } from "../config/config.module"
import { AutoIncrementService } from "src/database/services/auto-increment.service"
import { AutoIncrementRepository } from "src/database/repositories/auto-increment.repository"
import { ApiModule } from "../api/api.module"

@Module({
  imports: [PrismaModule, ConfigModule, ApiModule],
  controllers: [TopicController],
  providers: [
    AutoIncrementService,
    TopicRepository,
    AutoIncrementRepository,
    TopicService,
  ],
  exports: [
    TopicService,
    TopicRepository,
    AutoIncrementService,
    AutoIncrementRepository,
  ],
})
export class TopicModule {}

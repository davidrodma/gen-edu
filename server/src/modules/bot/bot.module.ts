import { Module } from "@nestjs/common"
import { BotService } from "./services/bot.service"
import { ScrapeThreadService } from "./services/scrape-thread.service"
import { PrismaModule } from "src/database/prisma/prisma.module"
import { ConfigModule } from "../config/config.module"
@Module({
  imports: [PrismaModule, ConfigModule],
  controllers: [],
  providers: [BotService, ScrapeThreadService],
  exports: [ScrapeThreadService, BotService],
})
export class BotModule {}

import { Module } from "@nestjs/common"
import { PrismaModule } from "src/database/prisma/prisma.module"
import { ApiService } from "./services/api.service"
import { ConfigModule } from "../config/config.module"
import { CurrencyConversionService } from "./services/currency-conversion/currency-conversion.service"
import { AwesomeApi } from "./services/currency-conversion/awesomeapi/awesomeapi.api"

@Module({
  imports: [PrismaModule, ConfigModule],
  controllers: [],
  providers: [ApiService, AwesomeApi, CurrencyConversionService],
  exports: [ApiService, AwesomeApi, CurrencyConversionService],
})
export class ApiModule {}

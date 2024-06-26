import { Module } from "@nestjs/common"
import { APP_FILTER } from "@nestjs/core"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AllExceptionsFilter } from "./common/errors/http-exception.filter"
import { PrismaModule } from "./database/prisma/prisma.module"
import { AuthModule } from "./modules/auth/auth.module"
import { UserModule } from "./modules/user/user.module"
import { ConfigModule } from "./modules/config/config.module"
import { ApiService } from "./modules/api/services/api.service"
import { ApiModule } from "./modules/api/api.module"
import { TopicModule } from "./modules/topic/topic.module"

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    ConfigModule,
    ApiModule,
    TopicModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ApiService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}

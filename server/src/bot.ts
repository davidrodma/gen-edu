import { loadEnv } from 'src/load-env'
loadEnv()
import { NestFactory } from '@nestjs/core'
import { BotModule } from './modules/bot/bot.module'
import { BotService } from './modules/bot/services/bot.service'
async function bootstrap() {
  const app = await NestFactory.create(BotModule)
  const botService = app.get(BotService)
  botService.startBot()

  await app.listen(process.env.BOT_PORT)
}

bootstrap()


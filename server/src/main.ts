import { loadEnv } from 'src/load-env'
loadEnv()
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.setGlobalPrefix('api')

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  await app.listen(process.env.PORT)
}

bootstrap()


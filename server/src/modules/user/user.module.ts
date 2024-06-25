import { Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { UserController } from './controllers/user.controller'
import { PrismaModule } from 'src/database/prisma/prisma.module'
import { UserRepository } from './repositories/user.repository'
import { IsUniqueConstraint } from 'src/common/validation/is-unique.validator'

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, IsUniqueConstraint],
  exports: [UserService, UserRepository],
})
export class UserModule {}


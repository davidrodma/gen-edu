import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { PaginateDto } from 'src/common/dto/paginate.dto'
import { ID } from 'src/database/types/id.type'
import { User } from 'src/modules/user/entities/user.entity'
import MailTm  from '../mail-generator/mail.tm.service'

@Injectable()
export class MailGeneratorService {

  constructor(private readonly mailTmService: MailTm) {}
  async emailGenerator(username, password): Promise<any> {
    return await this.mailTmService.emailGenerator(username, password)

  }

  async getMessage(account, token): Promise<any> {
    return await this.mailTmService.getCode(account, token)
  }
}






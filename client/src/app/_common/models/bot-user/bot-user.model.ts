import { ID } from '../../types/ID.type'
import { Domain } from '../domain/domain.model'
import { BotUserStatus } from './bot-user-status.enum'

export interface BotUser {
  id?: ID
  email: string
  verifiedEmail: boolean
  username: string
  password?: string
  domain?: Domain
  domainId: ID
  owner: 'USER' | 'SYSTEM'
  noteError: string
  countErrors: number
  cookie: string
  token: string
  emailToken: string
  emailAccountId: string
  lastStatus: BotUserStatus
  createdAt: Date
  updatedAt: Date
  status: BotUserStatus
}

import { StatusDefault } from '../../enums/status.default.enum'
import { ID } from '../../types/ID.type'

export interface Domain {
  id: ID
  url: string
  currency?: string
  signin?: string
  signup?: string
  botUserId?: string
  emailConfirmation?: boolean
  createdAt: Date
  updatedAt: Date
}

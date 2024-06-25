import { StatusDefault } from '../../enums/status.default.enum'
import { ID } from '../../types/ID.type'
import { Role } from './role.enum'

export interface User {
  id: ID
  email: string
  name: string
  password?: string
  role: Role
  createdAt: Date
  updatedAt: Date
  status: StatusDefault
}

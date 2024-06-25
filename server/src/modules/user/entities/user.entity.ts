import { StatusDefault } from 'src/common/enums/status.default.enum'

export class User {
  id?: string
  email: string
  password: string
  name: string
  role: string
  createdAt: Date
  updatedAt: Date
  status: StatusDefault
}

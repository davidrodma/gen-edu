import { ID } from "src/database/types/id.type"
import { ContextType } from "../enum/context-type.enum"
import { ContextStatus } from "../enum/context-status.enum"

export class Context {
  id: ID
  description: string
  type: ContextType
  topicId: ID
  createdAt: Date
  updatedAt?: Date
  status: ContextStatus
}

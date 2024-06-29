import { ID } from "../../types/ID.type"
import { ContextStatus } from "./context-status.enum"
import { ContextType } from "./context-type.enum"

export interface Context {
  id: ID
  description: string
  type: ContextType
  topicId: ID
  createdAt: Date
  updatedAt?: Date
  status: ContextStatus
}

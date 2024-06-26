import { ID } from "src/database/types/id.type"
import { Context } from "./context.entity"
import { TopicStatus } from "../enum/topic-status.enum"

export class Topic {
  id?: ID
  subject: string
  language: string
  file: string
  sizeBytes: number
  duration: number
  createdAt: Date
  updatedAt: Date
  status: TopicStatus
  contexts?: Context[]
}

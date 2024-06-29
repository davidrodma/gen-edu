import { Context } from "vm"
import { ID } from "../../types/ID.type"
import { TopicStatus } from "./topic-status.enum"

export interface Topic {
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

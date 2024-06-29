import { Topic } from "../entities/topic.entity"
import { IsString } from "class-validator"

export class CreateTopicDto extends Topic {
  @IsString()
  subject: string

  @IsString()
  language: string
}

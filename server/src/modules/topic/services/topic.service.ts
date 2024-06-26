import { Injectable } from "@nestjs/common"
import { Topic } from "../entities/topic.entity"
import {
  TopicCreateInput,
  TopicRepository,
  TopicUpdateInput,
} from "../repositories/topic.repository"
import { PaginateDto } from "src/common/dto/paginate.dto"
import { ID } from "src/database/types/id.type"
import { TopicStatus } from "../enum/topic-status.enum"
import { UpdateTopicDto } from "../dto/update-topic.dto"

@Injectable()
export class TopicService {
  constructor(private readonly repository: TopicRepository) {}

  async create(data: TopicCreateInput) {
    return this.repository.create({ data: data })
  }

  async updateById(id: ID, updateDto: UpdateTopicDto | TopicUpdateInput) {
    return this.repository.updateById<Topic>(id, updateDto)
  }

  async paginate(paginateDto: PaginateDto) {
    let paginate = await this.repository.paginate<Topic>({
      paginateDto,
      fieldsSearch: ["subject"],
    })
    return paginate
  }

  async status(ids: ID[] | ID, status: number) {
    return await this.repository.status(ids, status)
  }

  async findById(id: ID) {
    return this.repository.findById(id)
  }

  async deleteManyByIds(ids: ID[] | ID) {
    return this.repository.deleteManyByIds(ids)
  }

  async pendings(limit = 1, last_digit = "") {
    let filter: any = {
      status: {
        in: [TopicStatus.PENDING, TopicStatus.IN_PROGRESS],
      },
    }
    if (last_digit) {
      filter = {
        ...filter,
        seq: {
          endsWith: last_digit.padStart(2, "0"),
        },
      }
    }
    const pendings = await this.repository.findMany<Topic[]>({
      where: filter,
      take: limit,
    })
    return pendings
  }
}

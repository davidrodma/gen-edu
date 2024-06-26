import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Delete,
  Query,
} from "@nestjs/common"
import { CreateTopicDto } from "../dto/create-topic.dto"
import { PaginateDto } from "src/common/dto/paginate.dto"
import { UpdateTopicDto } from "../dto/update-topic.dto"
import { ID } from "src/database/types/id.type"
import { TopicService } from "../services/topic.service"

@Controller("topic")
export class TopicController {
  constructor(private readonly service: TopicService) {}

  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.service.create(createTopicDto as any)
  }

  @Get()
  paginate(@Query() paginateDto: PaginateDto) {
    return this.service.paginate(paginateDto)
  }

  @Get(":id")
  findById(@Param("id") id: ID) {
    return this.service.findById(id)
  }

  @Put(":id")
  updateById(@Param("id") id: ID, @Body() updateTopicDto: UpdateTopicDto) {
    return this.service.updateById(id, updateTopicDto)
  }

  @Patch("status")
  status(@Body() body: { ids: ID[] | ID; status: number }) {
    return this.service.status(body.ids, body.status)
  }

  @Delete()
  async deleteManyByIds(@Body() body: { ids: ID[] | ID }) {
    return this.service.deleteManyByIds(body.ids)
  }
}

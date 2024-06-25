import { Injectable } from '@nestjs/common'
import { CreateConfigDto } from '../dto/create-config.dto'
import { Config } from '../entities/config.entity'
import { ConfigRepository } from '../repositories/config.repository'
import { PaginateDto } from 'src/common/dto/paginate.dto'
import { UpdateConfigDto } from '../dto/update-config.dto'
import { ConfigGroupService } from './config-group.service'
import { configCreateValidation } from '../validation/config-create.validation'
import { ID } from 'src/database/types/id.type'
import { StatusDefault } from 'src/common/enums/status.default.enum'
import { ConfigType } from '../enum/config-type.enum'

@Injectable()
export class ConfigService {
  constructor(
    private readonly repository: ConfigRepository,
    private readonly serviceGroup: ConfigGroupService,
  ) {}

  async create(createDto: CreateConfigDto) {
    configCreateValidation(createDto)
    const group = createDto.configGroupId
      ? await this.serviceGroup.findById(createDto.configGroupId)
      : await this.serviceGroup.findByTitleAndCreateIfNotExist(createDto.groupTitle)
    const data: any = {
      ...createDto,
      configGroup: {
        connect: { id: group.id },
      },
      jsonOptions: createDto?.jsonOptions || undefined,
      groupTitle: undefined,
      configGroupId: undefined,
    }
    const created = await this.repository.create({ data })
    const createdWithGroup = this.repository.findUnique({
      where: { id: created.id },
      include: {
        configGroup: true,
      },
    })

    return createdWithGroup
  }

  async getByName(name: string, status?: StatusDefault) {
    let where: any = {
      name,
    }
    if (status !== undefined) {
      where = { ...where, status: status }
    }
    return this.repository.findUnique({ where })
  }

  async getByNameEnabled(name: string) {
    return this.getByName(name, StatusDefault.ENABLED)
  }

  async getValue(name: string) {
    const config = await this.getByNameEnabled(name)
    const value = config && config?.value ? config.value : null
    if (value && config.type == ConfigType.NUMBER) {
      return parseFloat(value)
    }
    return value
  }

  async paginate(paginateDto: PaginateDto) {
    let paginate = await this.repository.paginate<Config>({
      paginateDto,
      findManyArgs: {
        include: {
          configGroup: true,
        },
      },
      fieldsSearch: ['name', 'title', 'description'],
    })
    return paginate
  }

  async status(ids: ID[] | ID, status: number) {
    return await this.repository.status(ids, status)
  }

  async updateById(id: ID, updateDto: UpdateConfigDto) {
    let data: any = {
      ...updateDto,
    }
    if (updateDto.configGroupId || updateDto.groupTitle) {
      const group = updateDto.configGroupId
        ? await this.serviceGroup.findById(updateDto.configGroupId)
        : await this.serviceGroup.findByTitleAndCreateIfNotExist(updateDto.groupTitle)
      data = {
        ...data,
        groupTitle: undefined,
        configGroupId: undefined,
        configGroup: {
          connect: { id: group.id },
        },
      }
    }

    const obj = await this.repository.updateById(id, data)
    const objWithGroup = this.repository.findUnique({
      where: { id: obj.id },
      include: {
        configGroup: true,
      },
    })
    return objWithGroup
  }

  async updateValueById(id: ID, value: string) {
    return this.repository.updateById(id, { value })
  }

  async updateValueByName(name: string, value: string) {
    return this.repository.update({ where: { name }, data: { value } })
  }

  async findById(id: ID) {
    return this.repository.findById(id)
  }

  async deleteManyByIds(ids: ID[] | ID) {
    return this.repository.deleteManyByIds(ids)
  }
}

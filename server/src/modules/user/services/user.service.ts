import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from '../dto/create-user.dto'
import { User } from '../entities/user.entity'
import { UserRepository } from '../repositories/user.repository'
import { PaginateDto } from 'src/common/dto/paginate.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { CreateAdminDto } from '../dto/create-admin.dto'
import { UpdateAdminDto } from '../dto/update-admin.dto'
import { ChangePasswordDto } from '../dto/change-password.dto'
import { ID } from 'src/database/types/id.type'

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10)
  }

  async create(createDto: CreateUserDto): Promise<User> {
    const password = await this.hashPassword(createDto.password)
    const data: any = {
      ...createDto,
      password,
      passwordConfirm: undefined,
    }
    const createdUser = await this.repository.create({ data })

    return {
      ...createdUser,
      password: undefined,
    }
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<User> {
    const password = await this.hashPassword(createAdminDto.password)
    const data: any = {
      ...createAdminDto,
      password,
      passwordConfirm: undefined,
    }

    const createdUser = await this.repository.create({ data })

    return {
      ...createdUser,
      password: undefined,
    }
  }

  async findByEmail(email: string) {
    return await this.repository.findUnique({ where: { email } })
  }

  async paginate(paginateDto: PaginateDto) {
    let paginate = await this.repository.paginate<User>({ paginateDto, fieldsSearch: ['email', 'name'] })
    paginate.list = paginate.list.map((obj: User) => {
      return { ...obj, password: undefined }
    })
    return paginate
  }

  async updateById(id: ID, updateDto: UpdateUserDto) {
    const obj = await this.repository.updateById(id, updateDto)
    return { ...obj, password: undefined }
  }

  async updateByIdAdmin(id: ID, updateDto: UpdateAdminDto) {
    let update = updateDto
    if (updateDto.password) {
      const password = await this.hashPassword(updateDto.password)
      update = {
        ...updateDto,
        password,
        passwordConfirm: undefined,
      }
    }
    const obj = await this.repository.updateById(id, update)
    return { ...obj, password: undefined }
  }

  async changePassword(id: ID, updateDto: ChangePasswordDto) {
    const password = await this.hashPassword(updateDto.password)
    const obj = await this.repository.updateById(id, {
      ...updateDto,
      password,
      passwordConfirm: undefined,
    })
    return { ...obj, password: undefined }
  }

  async findById(id: ID, removePassword = false) {
    const obj = await this.repository.findById(id)
    return removePassword ? { ...obj, password: undefined } : obj
  }

  async status(ids: ID[] | ID, status: number, userLogged: User) {
    return await this.repository.statusUsers(ids, status, userLogged)
  }

  async deleteMany(ids: ID[] | ID, userLogged: User) {
    return this.repository.deleteUsers(ids, userLogged)
  }
}

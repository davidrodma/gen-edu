import { Body, Controller, Get, Post, Param, Patch, Put, Delete, Query } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'
import { UserService } from '../services/user.service'
import { Public } from 'src/modules/auth/decorators/is-public.decorator'
import { PaginateDto } from 'src/common/dto/paginate.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { CurrentUser } from '../../auth/decorators/current-user.decorator'
import { User } from '../entities/user.entity'
import { CreateAdminDto } from '../dto/create-admin.dto'
import { UpdateAdminDto } from '../dto/update-admin.dto'
import { Role } from '../../auth/enums/role.enum'
import { Roles } from '../../auth/decorators/roles.decorator'
import { ChangePasswordDto } from '../dto/change-password.dto'
import { ID } from 'src/database/types/id.type'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @Public()
  create(@Body() createDto: CreateUserDto) {
    return this.service.create(createDto)
  }

  @Post('admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.service.createAdmin(createAdminDto)
  }

  @Get()
  paginate(@Query() paginateDto: PaginateDto) {
    return this.service.paginate(paginateDto)
  }

  @Get(':id')
  findById(@Param('id') id: ID) {
    return this.service.findById(id, true)
  }

  @Patch()
  @Roles(Role.USER, Role.ADMIN)
  updateById(@Body() updateDto: UpdateUserDto, @CurrentUser() user: User) {
    return this.service.updateById(user.id, updateDto)
  }

  @Patch('change-password')
  @Roles(Role.USER, Role.ADMIN)
  changePassword(@Body() changePasswordDto: ChangePasswordDto, @CurrentUser() user: User) {
    return this.service.changePassword(user.id, changePasswordDto)
  }

  @Put('admin/:id')
  updateByIdAdmin(@Param('id') id: ID, @Body() updateAdminDto: UpdateAdminDto) {
    return this.service.updateByIdAdmin(id, updateAdminDto)
  }

  @Patch('status')
  status(@Body() body: { ids: ID[] | ID; status: number }, @CurrentUser() user: User) {
    return this.service.status(body.ids, body.status, user)
  }

  @Delete()
  async deleteMany(@Body() body: { ids: ID[] | ID }, @CurrentUser() user: User) {
    return this.service.deleteMany(body.ids, user)
  }
}

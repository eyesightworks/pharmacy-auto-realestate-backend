import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common'
import { PropertiesService } from './properties.service'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../../auth/guards/roles.guard'
import { Roles } from '@common/decorators/roles.decorator'
import { Public } from '@common/decorators/public.decorator'
import { Role } from '@prisma/client'

@Controller('properties')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  // 🔓 Public
  @Public()
  @Get()
  findAll() {
    return this.propertiesService.findAll()
  }

  // 🔓 Public
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id)
  }

  // 🔒 Admin & Agent
  @Roles(Role.ADMIN, Role.AGENT)
  @Post()
  create(@Body() data: any) {
    return this.propertiesService.create(data)
  }

  // 🔒 Admin & Agent
  @Roles(Role.ADMIN, Role.AGENT)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.propertiesService.update(id, data)
  }

  // 🔒 Admin only
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id)
  }
}

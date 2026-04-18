import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common'
import { VehiclesService } from './vehicles.service'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../../auth/guards/roles.guard'
import { Roles } from '@common/decorators/roles.decorator'
import { Public } from '@common/decorators/public.decorator'
import { Role } from '@prisma/client'

@Controller('vehicles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // 🔓 PUBLIC - Anyone can view vehicles
  @Public()
  @Get()
  findAll() {
    return this.vehiclesService.findAll()
  }

  // 🔒 ADMIN & AGENT can create vehicle
  @Roles(Role.ADMIN, Role.AGENT)
  @Post()
  create(@Body() data: any) {
    return this.vehiclesService.create(data)
  }

  // 🔒 ADMIN & AGENT can update vehicle
  @Roles(Role.ADMIN, Role.AGENT)
  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.vehiclesService.update(Number(id), data)
  }

  // 🔒 ADMIN only can delete vehicle
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(Number(id))
  }
}
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';

import { VehiclesService } from './vehicles.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { Public } from '@common/decorators/public.decorator';
import { Role } from '@prisma/client';

@Controller('vehicles')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  // 🔓 PUBLIC
  @Public()
  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  // 🔓 PUBLIC
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  // 🔒 CREATE
  @Roles(Role.ADMIN, Role.AGENT)
  @Post()
  create(@Body() data: any) {
    return this.vehiclesService.create(data);
  }

  // 🔒 UPDATE (✅ PATCH like Properties)
  @Roles(Role.ADMIN, Role.AGENT)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.vehiclesService.update(id, data);
  }

  // 🔒 DELETE
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
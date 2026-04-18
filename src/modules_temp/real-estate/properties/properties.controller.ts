import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  // ✅ PUBLIC
  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  // ✅ PUBLIC
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  // 🔒 CREATE
  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() data: CreatePropertyDto,
    @Request() req: any,
  ) {
    console.log('USER:', req.user); // 🔥 VERY IMPORTANT

    return this.propertiesService.create(data, req.user?.id);
  }

  // 🔒 UPDATE
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() data: UpdatePropertyDto,
    @Request() req: any,
  ) {
    return this.propertiesService.update(id, data, req.user);
  }

  // 🔒 DELETE
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }
}
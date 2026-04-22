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

import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '@common/decorators/roles.decorator';
import { Public } from '@common/decorators/public.decorator';
import { Role } from '@prisma/client';

@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // 🔓 PUBLIC - anyone can view products
  @Public()
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // 🔓 PUBLIC - get single product
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  // 🔒 CREATE - Pharmacist or Admin
  @Roles(Role.ADMIN, Role.PHARMACIST)
  @Post()
  create(@Body() data: any) {
    return this.productsService.create(data);
  }

  // 🔒 UPDATE - IMPORTANT (image upload uses this)
  @Roles(Role.ADMIN, Role.PHARMACIST)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.productsService.update(id, data);
  }

  // 🔒 DELETE
  @Roles(Role.ADMIN, Role.PHARMACIST)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../../auth/guards/roles.guard'
import { Roles } from '@common/decorators/roles.decorator'
import { Public } from '@common/decorators/public.decorator'
import { Role } from '@prisma/client'

@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // 🔓 Public
  @Public()
  @Get()
  findAll() {
    return this.productsService.findAll()
  }

  // 🔒 Pharmacist only
  @Roles(Role.PHARMACIST)
  @Post()
  create(@Body() data: any) {
    return this.productsService.create(data)
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() data: any) {
    return this.vehiclesService.create(data);
  }

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  // ✅ UPDATE
  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.vehiclesService.update(+id, data);
  }

  // ✅ DELETE
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehiclesService.remove(+id);
  }
}

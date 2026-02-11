import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.VehicleCreateInput) {
    return this.prisma.vehicle.create({ data });
  }

  async findAll() {
    return this.prisma.vehicle.findMany();
  }

  async findOne(id: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: String(id) },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }

    return vehicle;
  }

  async update(id: number, data: Prisma.VehicleUpdateInput) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: String(id) },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }

    return this.prisma.vehicle.update({
      where: { id: String(id) },
      data,
    });
  }

  async remove(id: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: String(id) },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle with id ${id} not found`);
    }

    return this.prisma.vehicle.delete({
      where: { id: String(id) },
    });
  }
}

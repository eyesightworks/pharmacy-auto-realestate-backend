import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { PrismaService } from '../../../database/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ CREATE PROPERTY
  async create(data: CreatePropertyDto, userId: string) {
    if (!userId) {
      throw new ForbiddenException('User not authenticated');
    }

    return this.prisma.property.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        location: data.location,
        status: data.status,
        imageUrl: data.imageUrl,   // ✅ IMPORTANT
        agentId: userId,
      },
    });
  }

  // ✅ GET ALL (🔥 FIXED HERE)
  async findAll() {
    return this.prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        price: true,
        location: true,
        imageUrl: true,   // ✅ THIS WAS MISSING
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // ✅ GET ONE
  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundException(`Property with id ${id} not found`);
    }

    return property;
  }

  // ✅ UPDATE
  async update(id: string, data: UpdatePropertyDto, user: any) {
    const property = await this.findOne(id);

    if (user.role !== 'ADMIN' && property.agentId !== user.id) {
      throw new ForbiddenException(
        'You can only update your own property',
      );
    }

    return this.prisma.property.update({
      where: { id },
      data: {
        ...data,
        imageUrl: data.imageUrl, // ✅ ensure update works
      },
    });
  }

  // ✅ DELETE
  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.property.delete({
      where: { id },
    });
  }
}
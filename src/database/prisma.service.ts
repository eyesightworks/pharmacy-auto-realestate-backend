import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    let retries = 5;

    while (retries) {
      try {
        await this.$connect();
        console.log('✅ Prisma connected');
        break;
      } catch (error) {
        console.log('❌ DB connection failed, retrying...');
        retries--;

        if (retries === 0) {
          console.log('❌ Could not connect to database');
          throw error;
        }

        // wait 3 seconds before retry
        await new Promise((res) => setTimeout(res, 3000));
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('✅ Prisma disconnected');
  }
}
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';
import { AutomobileModule } from './modules/automobile/automobile.module';
import { RealEstateModule } from './modules/real-estate/real-estate.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';

import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from './modules/auth/guards/roles.guard';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    PharmacyModule,
    AutomobileModule,
    RealEstateModule,
    CloudinaryModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
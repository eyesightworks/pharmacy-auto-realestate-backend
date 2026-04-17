import { Module } from '@nestjs/common';

import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';
import { AutomobileModule } from './modules/automobile/automobile.module';
import { RealEstateModule } from './modules/real-estate/real-estate.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';

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
})
export class AppModule {}
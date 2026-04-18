import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';

@Module({
  controllers: [CloudinaryController],
  providers: [CloudinaryService], // ✅ VERY IMPORTANT
  exports: [CloudinaryService],   // (optional but good practice)
})
export class CloudinaryModule {}
import { Controller, Post, Body } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('sign')
  signUpload(@Body() body: { public_id: string }) {
    if (!body.public_id) {
      throw new Error('public_id is required');
    }

    return this.cloudinaryService.signUpload(body);
  }
}
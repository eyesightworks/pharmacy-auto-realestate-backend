import { Controller, Post, Body } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('sign')
  signUpload(@Body() body: { public_id: string }) {
    return this.cloudinaryService.signUpload(body);
  }
}
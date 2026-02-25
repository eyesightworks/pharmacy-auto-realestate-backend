import { Controller, Post, Body } from '@nestjs/common'
import * as crypto from 'crypto'

@Controller('cloudinary')
export class CloudinaryController {

  @Post('sign')
  signUpload(@Body() body: { public_id: string }) {

    const timestamp = Math.round(new Date().getTime() / 1000)

    const folder = 'eyesightworks'

    const signature = crypto
      .createHash('sha1')
      .update(
        `folder=${folder}&public_id=${body.public_id}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`
      )
      .digest('hex')

    return {
      timestamp,
      signature,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      folder,
    }
  }
}
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CloudinaryService {
  signUpload() {

    console.log("ENV CHECK:", {
      cloud: process.env.CLOUDINARY_CLOUD_NAME,
      key: process.env.CLOUDINARY_API_KEY,
      secret: process.env.CLOUDINARY_API_SECRET,
    });

    const timestamp = Math.round(Date.now() / 1000);
    const folder = 'eyesightworks';

    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    if (!apiSecret || !apiKey || !cloudName) {
      throw new Error('Cloudinary env variables missing');
    }

    // ✅ MATCHES FRONTEND EXACTLY
    const signature = crypto
      .createHash('sha1')
      .update(`folder=${folder}&timestamp=${timestamp}${apiSecret}`)
      .digest('hex');

    return {
      timestamp,
      signature,
      api_key: apiKey,
      cloud_name: cloudName,
      folder,
    };
  }
}
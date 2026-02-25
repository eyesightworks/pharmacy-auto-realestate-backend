import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CloudinaryService {
  signUpload() {
    const timestamp = Math.round(Date.now() / 1000);

    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    if (!apiSecret || !apiKey || !cloudName) {
      throw new Error('Cloudinary environment variables are missing');
    }

    const signature = crypto
      .createHash('sha1')
      .update(`timestamp=${timestamp}&folder=eyesightworks${apiSecret}`)
      .digest('hex');

    return {
      timestamp,
      signature,
      api_key: apiKey,
      cloud_name: cloudName,
      folder: 'eyesightworks',
    };
  }
}
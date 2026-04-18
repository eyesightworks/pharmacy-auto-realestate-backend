import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CloudinaryService {
  signUpload(body: { public_id: string }) {

    const timestamp = Math.round(Date.now() / 1000);
    const folder = 'eyesightworks';

    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    // DEBUG (remove later)
    console.log("ENV:", {
      cloud: cloudName,
      key: apiKey,
      secret: apiSecret ? "OK" : "MISSING"
    });

    if (!apiSecret || !apiKey || !cloudName) {
      throw new Error('Cloudinary env variables missing');
    }

    const public_id = body.public_id;

    const signature = crypto
      .createHash('sha1')
      .update(
        `folder=${folder}&public_id=${public_id}&timestamp=${timestamp}${apiSecret}`
      )
      .digest('hex');

    return {
      timestamp,
      signature,
      api_key: apiKey,
      cloud_name: cloudName,
      folder,
      public_id
    };
  }
}
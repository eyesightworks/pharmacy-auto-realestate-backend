import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async generateDescription(data: any) {
    const prompt = `
Generate a professional real estate property description.

Property Type: ${data.propertyType}
Bedrooms: ${data.bedrooms}
Bathrooms: ${data.bathrooms}
Location: ${data.location}
Price: ${data.price}
Amenities: ${data.amenities?.join(', ') || ''}

Make it sound modern, attractive, and professional.
`;

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    return {
      description: response.choices[0].message.content,
    };
  }
}
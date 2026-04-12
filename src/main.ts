import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ GLOBAL PREFIX
  app.setGlobalPrefix('api');

  // ✅ CORS (production safe)
  app.enableCors({
    origin: [
      'https://frontend-eight-mocha-89.vercel.app',
      'https://eyesight-realestate.vercel.app',
      'http://localhost:3000',
      'http://localhost:5500',
    ],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  });

  // ✅ VALIDATION (VERY IMPORTANT)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // ✅ STATIC FILES (optional since using Cloudinary)
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // ✅ BODY SIZE LIMIT (important for future uploads)
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // ✅ PORT (Render compatible)
  const port = process.env.PORT || 3000;

  await app.listen(port, '0.0.0.0');

  // ✅ CLEAN LOGS (production safe)
  console.log('🚀 Backend Started');
  console.log(`🌐 Running on port ${port}`);
  console.log(`📡 API prefix: /api`);
}

bootstrap();
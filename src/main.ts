import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { join } from 'path'
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.enableCors({
    origin: [
      'https://frontend-eight-mocha-89.vercel.app',
      'https://eyesight-realestate.vercel.app',
      'http://localhost:3000',
      'http://localhost:5500',
    ],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

  await app.listen(port, '0.0.0.0')

  console.log('🚀 Backend Started')
  console.log(`🌐 Port: ${port}`)
  console.log(`📡 API: http://localhost:${port}/api`)
}

bootstrap()
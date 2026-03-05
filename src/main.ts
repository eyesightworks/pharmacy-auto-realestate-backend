import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {

  const app = await NestFactory.create(AppModule)

  // Global API prefix
  app.setGlobalPrefix('api')

  // Enable CORS for Admin + Public frontend
  app.enableCors({
    origin: [
      'https://frontend-eight-mocha-89.vercel.app', // Admin
      'https://eyesight-realestate.vercel.app/', // Public site (add your real public Vercel domain)
      'http://localhost:3000',
      'http://localhost:5500'
    ],
    credentials: true
  })

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  )

  const port = process.env.PORT || 3000

  await app.listen(port, '0.0.0.0')

  console.log(`🚀 Eyesightworks Backend running on port ${port}`)

}

bootstrap()
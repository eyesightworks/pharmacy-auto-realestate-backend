import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // ✅ Global API prefix
  app.setGlobalPrefix('api')

  // ✅ Enable CORS for Vercel frontend
  app.enableCors({
    origin: [
      'https://frontend-eight-mocha-89.vercel.app'
    ],
    credentials: true,
  })

  // ✅ Global validation (recommended production practice)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )

  // ✅ Render provides PORT automatically
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

  await app.listen(port, '0.0.0.0')

  console.log(`🚀 Server running on port ${port}`)
}

bootstrap()
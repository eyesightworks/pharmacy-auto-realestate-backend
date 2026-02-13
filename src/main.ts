import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // ✅ Global prefix
  app.setGlobalPrefix('api')

  // ✅ Enable CORS (for frontend later)
  app.enableCors({
    origin: '*',
    credentials: true,
  })

  // ✅ Render provides PORT automatically
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

  await app.listen(port, '0.0.0.0')

  console.log(`🚀 Application is running on: http://localhost:${port}/api`)
}

bootstrap()

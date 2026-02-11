import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.enableCors({
    origin: '*', // replace with your Vercel URL later
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })

  const port = process.env.PORT || 3000
  await app.listen(port)

  console.log(`🚀 Backend running on port ${port}`)
}
bootstrap()

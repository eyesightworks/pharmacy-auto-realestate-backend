import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {

  const app = await NestFactory.create(AppModule)

  /**
   * Global API Prefix
   * All routes become:
   * /api/properties
   * /api/vehicles
   * /api/products
   */
  app.setGlobalPrefix('api')


  /**
   * CORS configuration
   * Allows Admin + Public frontend
   */
  app.enableCors({
    origin: [
      'https://frontend-eight-mocha-89.vercel.app', // Admin dashboard
      'https://eyesight-realestate.vercel.app',     // Public marketplace
      'http://localhost:3000',                      // NextJS dev
      'http://localhost:5500'                       // Static HTML dev
    ],
    methods: ['GET','POST','PATCH','DELETE'],
    credentials: true
  })


  /**
   * Global Validation
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  )


  /**
   * Port configuration
   */
  const port = process.env.PORT
    ? parseInt(process.env.PORT)
    : 3000

  await app.listen(port, '0.0.0.0')


  console.log('🚀 Eyesightworks Infrastructure Backend Started')
  console.log(`🌐 Port: ${port}`)
  console.log(`📡 API Base: http://localhost:${port}/api`)

}

bootstrap()
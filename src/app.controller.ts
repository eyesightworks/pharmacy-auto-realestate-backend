import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  root() {
    return {
      message: "Eyesightworks API is running",
      status: "OK",
      endpoints: {
        auth: "/api/auth/login",
        vehicles: "/api/vehicles",
        properties: "/api/properties",
        products: "/api/products",
        cloudinary: "/api/cloudinary/sign"
      }
    };
  }

}
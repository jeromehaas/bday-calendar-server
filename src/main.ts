// IMPORTS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// BOOTSTRAP
async function bootstrap() {

  // SETUP APP
  const app = await NestFactory.create(AppModule);

  // ENABLE CORS
  app.enableCors();

  // ADD PREFIX
  app.setGlobalPrefix('api');

  // LISTEN ON PORT
  await app.listen(3000);

}

// RUN
bootstrap();

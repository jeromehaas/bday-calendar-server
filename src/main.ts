// IMPORTS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// BOOTSTRAP
async function bootstrap() {

  // GET PORT
  const port = process.env.APP_PORT || 3000;

  // SETUP APP
  const app = await NestFactory.create(AppModule);

  // ENABLE CORS
  app.enableCors();

  // ADD PREFIX
  app.setGlobalPrefix('api');

  // LISTEN ON PORT
  await app.listen(port);

}

// RUN
bootstrap();

// IMPORTS
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// BOOTSTRAP
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// RUN
bootstrap();

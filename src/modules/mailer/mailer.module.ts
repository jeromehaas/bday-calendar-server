// IMPORTS
import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ConfigModule } from '@nestjs/config';

// MODULE
@Module({
  imports: [ConfigModule],
  providers: [MailerService],
})

// EXPORTS
export class MailerModule {}

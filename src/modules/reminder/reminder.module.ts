// IMPORTS
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ReminderService } from './reminder.service';
import { MailerModule } from '../mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';
import { MailerService } from '../mailer/mailer.service';
import { BdaysModule } from '../bdays/bdays.module';

// MODULE
@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
    MailerModule,
    BdaysModule,
  ],
  providers: [ReminderService, MailerService],
})

// EXPORTS
export class ReminderModule {}
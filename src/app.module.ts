// IMPORTS
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { BdaysModule } from './modules/bdays/bdays.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ReminderService } from './modules/reminder/reminder.service';
import { MailerModule } from './modules/mailer/mailer.module';
import { ReminderModule } from './modules/reminder/reminder.module';
import { MailerService } from './modules/mailer/mailer.service';

// MODULE
@Module({
  imports: [
    DatabaseModule,
    BdaysModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MailerModule,
    ReminderModule,
  ],
  controllers: [],
  providers: [ReminderService, MailerService],
})

// EXPORTS
export class AppModule {}

// IMPORTS
import { Module } from '@nestjs/common';
import { DatabaseModule} from './modules/database/database.module';
import { BdaysModule } from './modules/bdays/bdays.module';
import { ConfigModule } from '@nestjs/config';
import {ScheduleModule} from '@nestjs/schedule';
import { ReminderService } from './services/reminder/reminder.service';

// MODULE
@Module({
  imports: [
    DatabaseModule,
    BdaysModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [ReminderService],
})

// EXPORTS
export class AppModule {}

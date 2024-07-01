// IMPORTS
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

// INJECTABLE
@Injectable()

// REMINDER SERVICE
export class ReminderService {

  // SETUP LOGGER
  private readonly logger = new Logger(ReminderService.name);

  // SETUP CRON-JOB
  @Cron('0 0 * * * *')
  handleCron() {
    console.log('Midnight!');
  };

}



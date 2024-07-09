// IMPORTS
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { BdaysService } from '../bdays/bdays.service';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '../mailer/mailer.service';

// INJECTABLE
@Injectable()

// REMINDER SERVICE
export class ReminderService {

  // CONSTRUCTOR
  constructor(
    private bdaysService: BdaysService,
    private configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  // REMIND FOR DAILY BDAYS
  @Cron('0 6 * * *')
  async notifyTodaysBdays() {

    // GET DAILY BDAYS
    const dailyBdays = await this.bdaysService.findDaily();

    // IF BDAYS TODAY
    if (dailyBdays.length > 0) {

      // SEND EMAIL
      await this.mailerService.sendEmail({
        subject: 'We have a birthday today!',
        template: 'notify-daily-bdays',
        context: dailyBdays,
      });

    }

  };

  // REMIND FOR WEEKLY BDAYS
  @Cron('0 6 * * 1')
  async notifyWeeklyBdays() {

    // GET CURRENT BDAYS
    const dailyBdays = await this.bdaysService.findWeekly();

    // IF BDAYS TODAY
    if (dailyBdays.length > 0) {

      // SEND EMAIL
      await this.mailerService.sendEmail({
        subject: 'We have a birthday this week!',
        template: 'notify-weekly-bdays',
        context: dailyBdays,
      });

    }

  };

}



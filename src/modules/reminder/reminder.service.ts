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
    const weeklyBdays = await this.bdaysService.findWeekly();

    // IF BDAYS TODAY
    if (weeklyBdays.length > 0) {

      // SEND EMAIL
      await this.mailerService.sendEmail({
        subject: 'We have a birthday this week!',
        template: 'notify-weekly-bdays',
        context: weeklyBdays,
      });

    }

  };

  // REMIND FOR MONTHLY BDAYS
  @Cron('0 6 * * 1')
  async notifyMonthlyBdays() {

    // GET CURRENT BDAYS
    const monthlyBdays = await this.bdaysService.findMonthly();

    // IF BDAYS TODAY
    if (monthlyBdays.length > 0) {

      // SEND EMAIL
      await this.mailerService.sendEmail({
        subject: 'We have a birthday this month!',
        template: 'notify-monthly-bdays',
        context: monthlyBdays,
      });

    }

  };

}



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

  // REMIND OF BDAYS FOR TODAY
  @Cron('0 6 * * *')
  async remindBdaysToday() {

    // GET CURRENT BDAYS
    const currentBdays = await this.bdaysService.findCurrent();

    // IF BDAYS TODAY
    if (currentBdays.length > 0) {

      // SEND EMAIL
     await this.mailerService.sendEmail({
       subject: 'A new bday is about to occur.',
       template: 'notify-today-bdays',
     });

    }

  };

}



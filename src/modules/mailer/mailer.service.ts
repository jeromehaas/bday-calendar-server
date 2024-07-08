// IMPORTS
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

// INJECTABLE
@Injectable()

// MAILER SERVICE
export class MailerService {

  // CONSTRUCTOR
  constructor(
    private readonly configService: ConfigService,
  ) {};

  // CREATE TRANSPORTER
  createTransporter() {

    // SETUP TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });

    // RETURN
    return transporter;

  };

  // COMPILE TEMPLATE
  private compileTemplate(templateName: string, variables: any): string {
    const templatePath = path.join(__dirname, '..', 'src', 'mail-templates', `${templateName}`);
    const source = fs.readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(source);
    return template(variables);
  }

  // SEND EMAIL
  async sendEmail({ subject, template }) {

    // TRY-CATCH BLOCK
    try {

      // SETUP TRANSPORTER
      const transporter = this.createTransporter();

      // COMPILE HTML AND TEXT
      const html = this.compileTemplate(`${template}/html.hbs`, { firstname: 'Jérôme' });
      const text = this.compileTemplate(`${template}/text.hbs`, { firstname: 'Jérôme' });

      // DEFINE OPTIONS
      const options = {
        from: this.configService.get<string>('MAIL_SENDER'),
        to: this.configService.get<string>('MAIL_RECEIVER'),
        subject: subject,
        text: text,
        html: html,
      };

      // SEND MAIL
      await transporter.sendMail(options);

    }

    // HANDLE ERRORS
    catch (error) {

      // PRINT ERROR
      console.log(error.message);

    }

  }

}

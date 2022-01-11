import nodemailer from 'nodemailer';
import hbs, { HbsTransporter } from 'nodemailer-express-handlebars';
import { Service } from 'typedi';
import logger from '../../../utils/logger';
import { MailOptions } from './mail.types';
import { mailerOptions } from './mailConfig';

@Service()
export class MailService {
  transport: HbsTransporter;

  constructor() {
    const transport = nodemailer.createTransport(mailerOptions.transport);
    transport.use('compile', hbs(mailerOptions.viewEngine));
    this.transport = transport;
  }

  async sendEmail(options: MailOptions): Promise<void> {
    try {
      await this.transport.sendMail({
        from: mailerOptions.defaults.from,
        to: options.to || 'whatever@email.com',
        subject: options.subject,
        template: options.template,
        context: {
          ...options.context,
        },
      });
    } catch (error) {
      logger.error(error);
    }
  }
}

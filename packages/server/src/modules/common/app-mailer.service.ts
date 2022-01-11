import { Service } from 'typedi';
import { MailService } from '../core/mail/mail.service';
import { MailOptions } from '../core/mail/mail.types';

type TemplateNames = 'test';

interface AppMailOptions extends MailOptions {
  template: TemplateNames;
}

@Service()
export class AppMailerService {
  constructor(private mailService: MailService) {}

  sendTestEmail() {
    const mailOptions: AppMailOptions = {
      to: 'test@email.com',
      subject: 'Test email',
      template: 'test',
      context: {},
    };
    return this.mailService.sendEmail(mailOptions);
  }
}

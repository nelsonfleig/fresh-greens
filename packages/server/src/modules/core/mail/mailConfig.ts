import config from 'config';
import path from 'path';
import { SMTPTransportOptions } from './mail.types';

const transportOptions: SMTPTransportOptions = {
  host: config.get('smtpHost'),
  port: config.get('smtpPort'),
  auth: {
    user: config.get('smtpUser'),
    pass: config.get('smtpPassword'),
  },
  secure: config.get('smtpPort') === 465,
};

const viewEngineOptions = {
  extName: '.hbs',
  viewPath: path.join(__dirname, './views/emails'),
  viewEngine: {
    extname: '.hbs',
    layoutsDir: path.join(__dirname, './views/layouts'),
    defaultLayout: 'default',
    helpers: {
      math: (lval: any, operator: any, rval: any): number => {
        const lvalue = parseFloat(lval);
        const rvalue = parseFloat(rval);

        const operations: { [key: string]: number } = {
          '+': lvalue + rvalue,
          '-': lvalue - rvalue,
          '*': lvalue * rvalue,
          '/': lvalue / rvalue,
          '%': lvalue % rvalue,
        };
        return operations[operator];
      },
      ifEquals: (lvalue: any, rvalue: any, options: any) =>
        lvalue === rvalue ? options.fn(this) : options.inverse(this),
    },
  },
};

export const mailerOptions = {
  transport: transportOptions,
  viewEngine: viewEngineOptions,
  defaults: {
    from: config.get<string>('smtpFrom'),
  },
};

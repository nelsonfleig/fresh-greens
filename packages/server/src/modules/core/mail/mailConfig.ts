import config from 'config';
import path from 'path';
import { SmtpConfig, SMTPTransportOptions } from './mail.types';

const smtp = config.get<SmtpConfig>('smtp');

const transportOptions: SMTPTransportOptions = {
  host: smtp.host,
  port: smtp.port,
  // Auth credentials are provided through env variables
  auth: {
    user: config.get('smtpUser'),
    pass: config.get('smtpPassword'),
  },
  secure: smtp.port === 465,
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
    from: smtp.from,
  },
};

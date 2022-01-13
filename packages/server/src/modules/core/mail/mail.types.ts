export type SmtpConfig = {
  host: string;
  port: number;
  from: string;
};

export type SMTPTransportOptions = {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
  secure: boolean;
};

export type MailOptions = {
  to: string;
  subject: string;
  template: string;
  context?: Record<string, any>;
};

export type SMTPTransportOptions = {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
  secure: boolean;
};

export interface MailOptions {
  to: string;
  subject: string;
  template: string;
  context?: Record<string, any>;
}

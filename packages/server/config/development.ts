import typeormConfig from './database';

export default {
  frontendUrl: 'http://localhost:3000',
  smtp: {
    host: 'smtp.mailtrap.io',
    from: 'ShopIt <noreply@shopit.com>',
    port: 2525,
  },
  logLevel: 'info',
  typeorm: {
    ...typeormConfig,
  },
};

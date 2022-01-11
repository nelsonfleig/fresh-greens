import 'dotenv/config';
import 'reflect-metadata';
import { Application } from './application';
import logger from './utils/logger';

async function bootstrap() {
  const app = await Application.create();
  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    logger.info(`🚀 Server started on port ${process.env.PORT}`);
  });
}
bootstrap();

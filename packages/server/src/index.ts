import 'dotenv/config';
import config from 'config';
import 'reflect-metadata';
import { Application } from './application';
import logger from './utils/logger';

async function bootstrap() {
  const app = await Application.create();

  const port = config.get('port');
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    logger.info(`🚀 Server started on port ${port}`);
  });
}
bootstrap();

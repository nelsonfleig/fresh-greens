import 'dotenv/config';
import 'reflect-metadata';
import {Application} from './application';

async function bootstrap() {
  const app = await Application.create();
  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server started on port ${process.env.PORT}`);
  });
}
bootstrap();

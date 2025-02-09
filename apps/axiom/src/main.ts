import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import { withPayload } from '@payloadcms/next/withPayload'
import next from 'next';

process.env.NEST_DEBUG = 'true';
const dev = process.env.NODE_ENV !== 'production';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // const expressApp = app.getHttpAdapter().getInstance()

  // expressApp.get('/', (_req, res) => {
  //   res.redirect('http://localhost:3000/admin')
  // })
  //

const { withPayload } = await import('@payloadcms/next/withPayload');

  const nextApp = next({
    dev,
    conf: withPayload({distDir: 'dist/apps/axiom'}),
    dir: 'apps/axiom/',
  });

  const handle = nextApp.getRequestHandler();
  await nextApp.prepare();
  const server = app.getHttpAdapter().getInstance();
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  app.enableCors()

  // eslint-disable-next-line node/prefer-global/process
  const port = process.env.PORT || 3000
  await app.listen(port)

  Logger.log(`🚀 Server running at: http://localhost:${port}`)
  Logger.log(`📑 Payload Admin: http://localhost:${port}/admin`)
}

bootstrap()

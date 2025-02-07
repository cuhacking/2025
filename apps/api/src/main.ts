import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const expressApp = app.getHttpAdapter().getInstance()

  expressApp.get('/', (_req, res) => {
    res.redirect('http://localhost:3000/admin')
  })

  app.enableCors()

  // eslint-disable-next-line node/prefer-global/process
  const port = process.env.PORT || 4000
  await app.listen(port)

  Logger.log(`🚀 Server running at: http://localhost:${port}`)
  Logger.log(`📑 Payload Admin: http://localhost:${port}/admin`)
}

bootstrap()

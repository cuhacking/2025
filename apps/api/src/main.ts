/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // const globalPrefix = 'api'
  const globalPrefix = ''
  app.setGlobalPrefix(globalPrefix)
  // eslint-disable-next-line node/prefer-global/process
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  )
}

bootstrap()

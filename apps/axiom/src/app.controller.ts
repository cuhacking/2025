// DO NOT REMOVE THIS ESLINT DISABLE AS IT FAILS THE BUILD OTHERWISE
/* eslint-disable ts/consistent-type-imports */
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }
}

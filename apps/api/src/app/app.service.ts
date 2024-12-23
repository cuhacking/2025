import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  // getData(): { message: string } {
  //   return { message: 'Hello API' };
  // }
  getData(): string {
    return 'Hello World'
  }
}

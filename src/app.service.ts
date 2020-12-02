import { Injectable } from '@nestjs/common';

// Service는 business logic을 작성하는 곳.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}

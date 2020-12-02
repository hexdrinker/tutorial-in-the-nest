import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller는 url을 가져오고 함수를 실행한다. express의 router 같은 존재.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // url을 가져와서 함수로 맵핑한다.
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}

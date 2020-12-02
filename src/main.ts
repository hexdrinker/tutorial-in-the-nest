import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 꼭 bootstrap이 아니라 다른 이름이어도 됨.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

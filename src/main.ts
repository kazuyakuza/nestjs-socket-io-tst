import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: loggerConfiguration(),
  });
  await app.listen(3000);
}
function loggerConfiguration() {
  const logLevels: LogLevel[] = [];
  logLevels.push(
    'log',
    'error',
    'warn',
    'debug',
    'verbose',
  );
  return logLevels;
}
bootstrap();

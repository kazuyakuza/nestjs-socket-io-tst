import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { GlobalChannelModule } from './global-channel/global-channel.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    GlobalChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

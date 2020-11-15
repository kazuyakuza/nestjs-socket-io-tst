import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalChannelModule } from './global-channel/global-channel.module';

@Module({
  imports: [
    GlobalChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

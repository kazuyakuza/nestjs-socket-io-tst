import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalChannelModule } from './global-channel/global-channel.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    GlobalChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

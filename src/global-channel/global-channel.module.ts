import { Module } from '@nestjs/common';
import { GlobalChannelGateway } from './global-channel.gateway';

@Module({
  providers: [GlobalChannelGateway]
})
export class GlobalChannelModule {}

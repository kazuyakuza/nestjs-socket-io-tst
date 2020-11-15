import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
@WebSocketGateway(8765, { namespace: 'global-channel' })
export class GlobalChannelGateway {
  @SubscribeMessage('global-channel')
  handleGlobalMsg(@MessageBody() msg) {
    Logger.log({ msg });
    return true;
  }
}

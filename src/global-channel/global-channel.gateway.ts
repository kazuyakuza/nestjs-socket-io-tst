import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';

@WebSocketGateway(81, { namespace: "global-channel" })
export class GlobalChannelGateway {
  onMsg(@MessageBody() msg: string) {

  }
}

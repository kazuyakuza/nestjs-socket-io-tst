### Steps of this project

1. Init Project

```
$ npm i -g @nestjs/cli
$ nest new socket-io-tst
```

2. modify `README.md`

3. upload to github

4. Add websockets

```
yarn add @nestjs/websockets @nestjs/platform-socket.io
yarn add -D @types/socket.io
```
5. Generate `Global-Channel` module `nest g mo global-channel`

### Links

* https://en.wikipedia.org/wiki/WebSocket
* https://socket.io/docs/
* https://docs.nestjs.com

6. Test Socket works with Socket.io tester
https://www.electronjs.org/apps/socket-io-tester

Basic config:
```
Address: http://localhost:8765
Namespace: global-channel
Send Message: global-channel
```

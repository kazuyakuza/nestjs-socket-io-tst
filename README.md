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

6. Test Socket works with Socket.io tester
https://www.electronjs.org/apps/socket-io-tester

Basic config:
```
Address: http://localhost:8765
Namespace: global-channel
Send Message: global-channel
```

7. Add server-static package to serve a basic index.html `yarn add @nestjs/serve-static`
8. Add VueJS HelloWorld
9. Add socket.io Client & basic test msg
  **Important** The socket-io server/client versions must be compatible

### Links

* https://en.wikipedia.org/wiki/WebSocket
* https://socket.io/docs/
* https://docs.nestjs.com
* https://v3.vuejs.org/guide/introduction.html
* examples:
 * https://medium.com/@phatdev/build-a-real-time-chat-application-with-websocket-socket-io-redis-and-docker-in-nestjs-499c2513c18
 * https://blog.logrocket.com/scalable-websockets-with-nestjs-and-redis/

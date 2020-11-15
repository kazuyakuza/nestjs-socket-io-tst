const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!'
    }
  }
};
Vue.createApp(HelloVueApp).mount('#hello-vue');

const socket = io('http://localhost:8765/global-channel');
__msgLoop(socket, 1000);

function __msgLoop(socket, time) {
  setTimeout(
   () => {
     socket.emit('global-channel', { arr: ['this', 'is', 'some', 'data'] }, data => console.log(data));
     __msgLoop(socket, time);
   }, time
  );
}

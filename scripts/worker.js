console.log('Worker Loaded');

// Invoked when parent sends message to worker
// Self means the global this. In parent, its window, here, its the worker
// As we are referring to global object, self is optional here
self.onmessage = (msg) => {
  const msgType = msg.data.type;
  switch (msgType) {
    case 'msg':
      printMessage(msg.data.msg);
      break;
    case 'fn':
    default:
      calculateSum();
      break;
  }
}

const printMessage = (msg) => {
  console.log('Worker: Message rcvd:', msg);
}

const calculateSum = () => {
  let sum = 0;
  for (let i=0; i<10000000000; i++) {
    sum += i;
  }
  postMessage(sum);
}
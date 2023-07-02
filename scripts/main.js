console.log('Script loaded');

// Initialise worker
// Dedicated worker
const worker = new Worker('/scripts/dedicated-worker.js');

const calculateSumBtn = document.getElementById('calculateSum');
const changeBgBtn = document.getElementById('changeBackground');
const sendMsgBtn = document.getElementById('sendMessage');

calculateSumBtn.addEventListener('click', () => {
  worker.postMessage({ type: 'fn' });
});

worker.onmessage = (msg) => {
  console.log('Main: Message rcvd:', msg);
  window.alert(`Sum: ${msg.data}`);
}

changeBgBtn.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'green') {
    document.body.style.backgroundColor = 'blue';
  } else {
    document.body.style.backgroundColor = 'green';
  }
});

sendMsgBtn.addEventListener('click', () => {
  worker.postMessage({type: 'msg', msg: 'Ping'});
});

// *********
// Shared worker
const sharedWorker = new SharedWorker('/scripts/worker2.js', 'Learn Shared worker');
console.log('Shared Worker', sharedWorker);

const sendSharedMsgBtn = document.getElementById('sendSharedMsg');
sendSharedMsgBtn.addEventListener('click', () => {
  sharedWorker.port.postMessage('ping');
});

// to rcv back msg
sharedWorker.port.onmessage = ({data: msg}) => {
  console.log("Main Thread: Shared worker says: ", msg);
};

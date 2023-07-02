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
// const sharedWorker = new SharedWorker();
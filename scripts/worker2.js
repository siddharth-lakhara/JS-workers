
// see logs at chrome://inspect/#workers
console.log('Shared worker loaded');

onconnect = (evt) => {
  console.log("Connect event", {evt});

  const port = evt.ports[0];
  port.onmessage = ({ data: msg }) => {
    console.log("Shared worker: ", msg);
    port.postMessage('pong');
  }
}
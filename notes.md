# Workers
Workers are of 3 types - 
1. Web worker
2. Dedicated workers 
3. Shared workers

## Use of worker
Workers are used to offload computationally expensive tasks from main thread. They are essentially move to the worker thread

## How to interact with worker
Worker exposes "post message" API for us to send messages to worker. These message can be parsed and handled by worker. All data passed to worker is cloned (and not passed as reference)

## Transferrable Objects
Whenever we pass data to worker, they are clone, or copied (and not passed as reference). This poses an issue if data passed is huge. We can use transferrable objects in this case, which will be passed as reference. These are shared across threads. Types of transferrable objects are:
1. File
2. Blob
3. Array Buffer

Function signature to use with post message API is as follows:
```
worker.postMessage(arrayBuffer, [arrayBuffer]);
window.postMessage(arrayBuffer, targetOrigin, [arrayBuffer]);

Example:
worker.postMessage(
                {data: int8View, moreData: anotherBuffer},
                [int8View.buffer, anotherBuffer]
);
```

> :warning: Array buffer and other shared objects may not update immediately.
> One needs to take proper precautions in order to rcv updated values
> Ref:
> 1. https://exploringjs.com/es2016-es2017/ch_shared-array-buffer.html#_shared-array-buffers
> 2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

## Load external scripts
If the worker needs external scripts, we need to use `importScripts` function. Eg - 
```
importScripts('script1.js');
```

## Shared Worker
```
const sharedWorker = new SharedWorker('/path/to/script');
```

This creates a new shared worker <br/>

Points to note here:
- Shared worker logs will not be printed in the same console
- We need to navigate to "chrome://inspect/#workers" and click "inspect" on our worker to see logs
- The request of loading web worker always shows "Pending" (not sure why)
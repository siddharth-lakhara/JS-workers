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

## Load external scripts
If the worker needs external scripts, we need to use `importScripts` function. Eg - 
```
importScripts('script1.js');
```

"use strict"

import webWorkerCore from '../dist/web-worker-core?raw'

(() => {
  const data = new Blob([webWorkerCore], {type: 'application/javascript; charset=utf-8'})
  const url = URL.createObjectURL(data)
  const testWorker = new Worker(url)
  testWorker.onmessage = evt => {
    console.log('FROM WORKER: ' + evt.data)
  }
  testWorker.postMessage('test message to worker')
})()

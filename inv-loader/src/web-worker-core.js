onmessage = evt => {
  const msg = 'Worker: ' + evt.data
  console.log(msg)
  postMessage(msg)
}

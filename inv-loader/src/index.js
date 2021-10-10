import * as msgpack from 'msgpack-lite'

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'yo ' + Object.keys(msgpack);

  return element;
}

document.body.appendChild(component());

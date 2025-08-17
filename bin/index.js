#!/usr/bin/env node

function SayHello() {
  return 'Say Hi from App'
}

// allow app to be overridden if plugin is installed
let app = {
  SayHi: () => SayHello() // run this by default
}

try {
  app = await import ('@evalarumbe/deps-experiment/sayhelloplugin')
}
catch(e) {
  console.log('no plugins')
}

console.log(app.SayHi())

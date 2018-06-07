require('http').createServer((req, res) => {
  console.log('New request')
  res.end('Hello workshop v2', + require('os').hostname())
}).listen(8000, () => console.log('Listening'))

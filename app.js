require('http').createServer((req, res) => {
  console.log('New request')
  res.end('Hello workshop', + require('os').hostname())
}).listen(8000, () => console.log('Listening'))

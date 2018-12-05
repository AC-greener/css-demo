var http = require('http')

var server = http.createServer(function (req, res) {
  var url = req.url
  var callback = url.slice(url.indexOf('=') + 1)
  console.log(callback)
  res.writeHead(200, {
    'Content-Type': 'text/javascript'
  })
  res.end(`${callback}('hello')`)
})
server.listen(3000, () => {
  console.log('server start at 3000')
})
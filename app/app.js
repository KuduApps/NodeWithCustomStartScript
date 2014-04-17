var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Main App!\nprocess.version: ' + process.version + "\nprocess.env.NODE_ENV: " + process.env.NODE_ENV);
  res.end();
}).listen(port);

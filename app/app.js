var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": 'text/plain' });
  res.write("Hello!\n");
  res.write("process.version: " + process.version + "\n");
  res.write("process.env.NODE_ENV: " + process.env.NODE_ENV);
  res.write("__filename: " + __filename + "\n");
  res.write("__dirname: " + __dirname + "\n");
  res.end();
}).listen(port);

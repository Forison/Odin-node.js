var http = require('http');
var url = require("url");
let fs = require("fs");
var temp;

http.createServer(function(req,res){
  var currentPath = url.parse(req.url).pathname;
  res.writeHead(200, {'Content-Type': 'text/html'});
  switch (currentPath) {
    case '/':
      temp = 'index.html';
      break;
    case '/contact':
      temp = 'contact.html';
      break;  
    case '/about':
      temp = 'about.html';
      break;
    default:
      temp = '404.html';
      break;
  }
  fs.readFile(temp, function(error, data) {
    if (error) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(error);
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);
var http = require("http");
var url = require("url")

http.createServer(function(request, response){
  response.writeHead(200, { "Content-Type":"text/html"  });
  response.write("<html>");
  response.write("<head><title>Node.js</title><head>");
  response.write("<body>Hello world!</body>");
  response.write("</html>");
  response.end();
}).listen(9999); 
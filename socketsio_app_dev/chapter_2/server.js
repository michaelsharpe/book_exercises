var http = require("http");
var url = require("url");

function onRequest(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname + " received!  Yay!");

  if(typeof(routes[request.method + pathname]) === "function"){
    routes[request.method + pathname](request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Not Found.  Boo-urns.")
  }
}

var routes = {};

exports.forRoute = function(method, path, handler){
  routes[method + path] = handler;
}

exports.start = function(port){
  http.createServer(onRequest).listen(port);
  console.log("Server started.  Ahhhhh. ")
}
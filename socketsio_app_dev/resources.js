var http = require("http");
var url = require("url");

var routes = {
  routes: {},
  for: function(path, handler){
    this.routes[path] = handler;
  }
}

routes.for("/start", function(request, response){
  response.writeHead(200, { "content/type": "text/plain" });
  response.write("Hello!");
  response.end();
})

routes.for("/finish", function(request, response){
  response.writeHead(200, { "content/type": "text/plain"} );
  response.write("Goodbye!");
  response.end();
})

function onRequest(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname+ " received.");
  if (typeof route.routes[pathname] === "function" ){
    route.routes[pathname](request, response);
  } else {
    response.writeHead(404, { "content/type": "text/plain" });
    response.write("404 Not Found.  Sorry mate.");
    response.end();
  }
}

http.createServer(onRequest).listen(9999);
console.log("Server started. Huzzah!")
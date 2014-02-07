var http = require("http");
var url = require("url");

function onRequest(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + pathname+ " received.");
  if (pathname == "/start"){
    response.writeHead(200, { "content/type": "text/plain" });
    response.write("Hello!");
    response.end();
  } else if (pathname == "/finish"){
    response.writeHead(200, { "content/type": "text/plain"} );
    response.write("Goodbye!");
    response.end();
  } else {
    response.writeHead(404, { "content/type": "text/plain" });
    response.write("404 not found.  Sorry mate.")
    response.end();
  }
}

http.createServer(onRequest).listen(9999);
console.log("Server started. Huzzah!")
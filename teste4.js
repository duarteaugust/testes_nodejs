var http = require("http"),
    url = require("url");
 
function start() {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
 
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Hello World");
        response.end();
    };
 
    http.createServer(onRequest).listen(777);
    console.log("node.js server has startedED");
}
exports.start = start;
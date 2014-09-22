var http = require("http"),
    onRequest = function (request, response) {
        console.log("Request received.");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("");
        response.write("<head>");
        response.write("<title>TÍTULO</title>");
        response.write("</head>");
        response.write("<h1>GAD!</h1>");
        response.write("<hr />");
        response.end();
    };
 
http.createServer(onRequest).listen(777);
console.log("node.js server has INICIADO!");
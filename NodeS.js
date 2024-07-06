var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
response.end('Hello World\n');
}).listen(7000);
console.log('Server runnning at http://localhost:7000/');
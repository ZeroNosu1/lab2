var http = require("http");

var listener = function(require,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h2 style="text-align:center;">Hello Word</h2>');
};


server = http.createServer(listener);
server.listen(30000);
console.log('Server running athttp://127.0.0.1:30000/');
/**
 * Created by KristyWessel on 1/5/16.
 */
var http = require('http');
var banking = require('./balance');

http.createServer(function(request, response){
    console.log("listening on 3000");
    response.writeHead(200);
    response.write(banking.text());
    response.write(banking.balance());
    response.end();
}).listen(3000);
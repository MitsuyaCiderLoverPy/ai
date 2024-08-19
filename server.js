const http = require('http');
let html = "<h1>Hello world!</h1><p>this is the test server.</p>"

const server = http.createServer((req, res) => {
    if(req.method==="GET"){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(html);
    res.end();
    }
    else if(req.method==="POST"){
        var data=""
        req.on("data", function(chunk){data+=chunk})
        .on("end", function(){
            console.log(data);
            res.end(html)
        })
    }

});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);

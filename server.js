const http = require('http')
let fs = require("fs")
let html = '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body><h1>Hello world!</h1><p>this is the test server.</p><span style="font-size: 150px;">缶がwwwwwwwカンカンwwwwwwwwwwwwwwwwwwwwww</span></body></html>'

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html charset=utf-8' })
        res.write(html)
        res.end()
    }
    else if (req.method === "POST") {
        var data = ""
        req.on("data", function (chunk) { data += chunk })
            .on("end", function () {
                console.log(data)
                fs.writeFileSync("chat_content.txt", JSON.parse(data)["content"])
                res.end(html)
            })
    }

})

const port = 10000
server.listen(port)
console.log('Server listen on port ' + port)

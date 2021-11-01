const http = require('http')
const server = http.createServer()


server.on('request', (req, res) => {
    if(req.url === '/' || req.url === '/home'){
        res.end(JSON.stringify({response: "Hello from NodeServer"}, null, 3))
    }    
})

server.listen(5000)
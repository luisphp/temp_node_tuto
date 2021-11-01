const http = require('http')

const httpServer = http.createServer((request, response) => {

    if(request.url === '/'){
        response.end('Welcome to our home page');
    }
    if(request.url === '/about'){
        response.end('About view')
    }
        response.end(`<h1>Oops! page not found!</h1>`)
    

    // response.end()
})


httpServer.listen(5000)
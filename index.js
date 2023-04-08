const http = require("http"); 
http.createServer((req,res) => {
    var path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to my Home page for IT 122! To learn a bit more about me visit localhost:3000/about');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to my About page! I have been studying web design now for two years. I am excited to continue learning javascript!');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }    
}).listen(process.env.PORT || 3000);
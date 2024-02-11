const fs = require('fs');

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let url = req.url;

    if(url == '/') {
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } 
    else if(url == '/rayan') {
        res.end("<h1>This is Rayan </h1> <p> Welcome  to Rayan's World </p>");

    } 
    else if(url == '/home') {
        res.end("<h1>This is Home </h1> <p> Welcome  to Rayan's World HOME</p>");
        
    } 
    else if(url == '/about') {
        res.end("<h1>This is About </h1> <p> Welcome  to Rayan's World ABOUT</p>");
    } 
    else {
        res.statusCode = 404;
        res.end("<h1>ERROR: Not Found</h1> <p> This page was not found on the server </p>");
    }

})

server.listen(port, ()=>{
    console.log(`Server is listeneing on port ${port}`);
})
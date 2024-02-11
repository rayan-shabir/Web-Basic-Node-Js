const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    //--> Status Code: 200 means OK
    //                 500 means ERROR
    //                 404 means NOT FOUND              
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end("<h1>This is Rayan </h1> <p> Welcome  to Rayan's World </p>");

    // console.log(req);    //--> It will print whatever we search/hit on website
    console.log(req.url);    //--> It will print url of website
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
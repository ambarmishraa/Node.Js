const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('Request received', req);
    console.log('Request received', req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>My First NodeJS Server</title></head>');
        res.write('<body><h1>Home</h1></body>');
        res.write('</html>');
        // res.end();
        return res.end(); // End the response for root path
    }
    else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>My First NodeJS Server</title></head>');
        res.write('<body><h1>Product</h1></body>');
        res.write('</html>');
        // res.end();
        return res.end(); // End the response for /products

    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>My First NodeJS Server</title></head>');
        res.write('<body><h1>Hello from NodeJS Server</h1></body>');
        res.write('</html>');
        // res.end();
        return res.end(); // End the response for other routes
    }



    // process.exit(); // Exiting the process immediately after request is received
});

const PORT = 3000;
server.listen(PORT, () => [
    console.log(`Server is running on http://localhost:${PORT}`),
])
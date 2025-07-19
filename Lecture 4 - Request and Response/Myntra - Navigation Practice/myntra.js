const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request Received', req);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Myntra Website</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Myntra</h1>');
        res.write('<a href="/home"><button>Home</button></a>');
        res.write('<a href="/men"><button>Men</button></a>');
        res.write('<a href="/women"><button>Women</button></a>');
        res.write('<a href="/kids"><button>Kids</button></a>');
        res.write('<a href="/cart"><button>Cart</button></a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write('<p>Explore our latest collections!</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/men') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Men\'s Section</title></head>');
        res.write('<body>');
        res.write('<h1>Men\'s Fashion</h1>');
        res.write('<p>Check out our latest men\'s fashion trends!</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/women') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Women\'s Section</title></head>');
        res.write('<body>');
        res.write('<h1>Women\'s Fashion</h1>');
        res.write('<p>Discover the latest trends in women\'s fashion!</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/kids') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Kids\' Section</title></head>');
        res.write('<body>');
        res.write('<h1>Kids\' Fashion</h1>');
        res.write('<p>Explore our collection for kids!</p>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/cart') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body>');
        res.write('<h1>Your Cart is Empty</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body>');
    res.write('<h1>Page Not Found</h1>');
    res.write('<p>The page you are looking for does not exist.</p>');
    res.write('</body>');
    res.write('</html>');
});

const Port = 3000;
server.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});

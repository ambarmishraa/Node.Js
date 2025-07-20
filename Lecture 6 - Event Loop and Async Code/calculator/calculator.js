const sumRequestHandler = require('./sum')

const requestHandler = (req, res) => {
    console.log('Server is running...');

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to the Calculator</h1><br>');
        res.write('<a href="/calculator"><button>Go To Calculator</button></a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>Calculator</h1>');
        res.write('<form action="/calculate-result" method="POST">');
        res.write('<input type="number" name="num1" value="" placeholder="Enter first number" required>');
        res.write('<input type="number" name="num2" value="" placeholder="Enter second number" required>');
        res.write('<button type="submit">Calculate</button>');
        return res.end();
    }
    else if (req.url === '/calculate-result' && req.method === 'POST') {
        sumRequestHandler(req, res);
    }
};

module.exports = requestHandler;
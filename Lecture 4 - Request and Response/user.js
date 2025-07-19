const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request Received:', 'url:', req.url, 'method:', req.method, 'headers:', req.headers);

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>My First NodeJS Server</title></head>');
        res.write('<body>');
        res.write('<h1>User fill your response....</h1>');
        res.write('<form action="/submit-details" method="POST">'); // ✅ fixed 'methood' to 'method' and added <form>
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="username" placeholder="Enter your name"><br><br>');

        res.write('<label for="gender">Gender:</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label><br>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');

        res.write('<input type="submit" value="Submit">');
        res.write('</form>'); // ✅ properly closed the form tag
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        fs.writeFileSync('user.txt', 'User details submitted'); // Simulating saving user details
        res.statusCode = 302; // Set status code to 200 OK
        res.setHeader('Location', '/'); // Redirect to thank you page
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Form Submitted</title></head>');
        res.write('<body>');
        res.write('<h1>Thank you for submitting your details!</h1>');
        res.write('</body>');
        res.write('</html>');
        // return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

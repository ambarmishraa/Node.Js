const fs = require('fs');

const userRequestHandler = (req, res) => {
    console.log('Request Received:');

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
    } else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {

        const body = [];
        req.on('data', (chunk) => {
            // console.log(`Data chunk received: ${chunk}`);
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            //    console.log('Full body received:', fullBody);
            const params = new URLSearchParams(fullBody);

            // const bodyObject = {};
            // for (const [key, value] of params.entries()){
            //     bodyObject[key] = value;
            // }

            const bodyObject = Object.fromEntries(params.entries());
            console.log('Parsed body:', bodyObject);
            fs.writeFile('userData.txt', JSON.stringify(bodyObject), error => {
                console.log('User details saved successfully:');
                res.statusCode = 302; // Set status code to 200 OK
                res.setHeader('Location', '/'); // Redirect to thank you page
                // return res.end();
            }); // Simulating saving user details
        });



    }
    else{
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Form Submitted</title></head>');
    res.write('<body>');
    res.write('<h1>Thank you for submitting your details!</h1>');
    res.write('</body>');
    res.write('</html>');
    // return res.end();
    }
    
};


module.exports = userRequestHandler; // Exporting the requestHandler function for use in app.js

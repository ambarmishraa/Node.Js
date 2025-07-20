const sumRequestHandler = (req, res) => {
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const bodyObj = Object.fromEntries(params);
        const num1 = bodyObj.num1;
        const num2 = bodyObj.num2;
        const result = parseFloat(num1) + parseFloat(num2);
        console.log(`Calculation Result:' ${result}`);
        // const num1 = parsedBody.split('&')[0].split('=')[1];
        // const num2 = parsedBody.split('&')[1].split('=')[1];    
        // const result = parseFloat(num1) + parseFloat(num2);
        // console.log(`Calculation Result: ${result}`);
        // res.write(`<h1>Calculation Result is: ${result}</h1>`);

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculation Result</title></head>');
        res.write('<body>');
        res.write(`<h1>Calculation Result is: ${result}</h1>`);
        res.write('</body>');
        res.write('</html>');
        return res.end();
    });
}

module.exports = sumRequestHandler;
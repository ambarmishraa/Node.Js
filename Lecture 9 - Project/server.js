const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First Request Handler', req.method, req.url);
    // res.send('<h1>Everything is working fine.....</h1>');
    next();
});

app.use((req, res, next) => {
    console.log('Second Request Handler', req.method, req.url);
    // res.send('<h1>Second Request Handler is working fine.....</h1>');
    next();
});

// app.use((req, res, next) => {
//     console.log('Third Request Handler', req.method, req.url);
//     res.send('<h1>Third Request Handler is working fine.....</h1>');
//     next();
// });

app.get( "/" ,(req, res, next) => {
    console.log('Handaling / for Handler', req.method, req.url);
    res.send('<h1>Handaling / is working fine.....</h1>');
    next();
});

app.get( "/contact-us" ,(req, res, next) => {
    console.log('Contact Us Page Request Handler', req.method, req.url);
    res.send(`<h1>Contact Us Page is working fine.....</h1>
        <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="email" name="email" placeholder="Enter your email">
        <button type="submit">Submit</button>
        </form>`);
    // next();
});

app.post( "/contact-us" ,(req, res, next) => {
    console.log('Contact Us Page POST Request Handler', req.method, req.url);               
    res.send('<h1>Contact You Soon.....</h1>');

    // next();
});

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})
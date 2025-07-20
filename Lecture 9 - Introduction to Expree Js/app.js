// Core Modules
// const http = require('http');

// Third-party Modules
const express = require('express');

// User-defined Modules
const userRequestHandler = require('./user');

const app = express();

app.use("/", (req, res, next) => {
    console.log(`Request Method-1: ${req.method}, Request URL: ${req.url}`);
    // res.send('<h1>Hello from Express!</h1>');
    next();
});

app.use("/submit-details", (req, res, next) => {
    console.log(`Request Method-2: ${req.method}, Request URL: ${req.url}`);
    res.send('<h1>Details Submitted!</h1>');
    // next();
});

// const server = http.createServer(app);

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})

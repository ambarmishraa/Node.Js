const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const homeRouter = require('./routes/homeRoute');

const app = express();

const rootDir = require('./utils/pathUtils');

// app.use((req, res, next) => {
//     console.log('First Request Handler', req.method, req.url);
//     // res.send('<h1>Everything is working fine.....</h1>');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Request Handler', req.method, req.url);
//     // res.send('<h1>Second Request Handler is working fine.....</h1>');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Third Request Handler', req.method, req.url);
//     res.send('<h1>Third Request Handler is working fine.....</h1>');
//     next();
// });

app.use(homeRouter);

app.use(userRouter);

app.use(bodyParser.urlencoded());

app.use(userRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})
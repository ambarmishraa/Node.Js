const express = require('express');
const userRouter= require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
    res.status(404).send(`<h1>404 Not Found</h1>`);
});

const Port = 3000;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
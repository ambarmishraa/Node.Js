const express = require('express');
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.send(`<h1>Hello from the server!</h1>
        <a href="/host/add-home">Add a home</a>`);
});

module.exports = userRouter;
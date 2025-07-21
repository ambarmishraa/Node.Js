const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.send(`<h1>Register your house here:</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="houseName" placeholder="Home Name" required>
            <input type="text" name="location" placeholder="Location" required>
            <button type="submit">Add Home</button>`);
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.send(`<h1>Home added successfully!</h1>
        <a href="/">Go back to home</a>`);
});

module.exports = hostRouter;
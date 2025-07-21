const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtils');

userRouter.get( "/contact-us" ,(req, res, next) => {
    console.log('Contact Us Page Request Handler', req.method, req.url);
    res.sendFile(path.join(rootDir, 'views', 'contactUsForm.html'));
});

userRouter.post( "/contact-us" ,(req, res, next) => {             
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'))
});

module.exports = userRouter;
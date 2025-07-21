const express = require('express');
const userRouter = express.Router();
const homesController = require('../controller/homes');


userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
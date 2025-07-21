const path = require('path');
const rootDir = require('../utils/pathUtil');
const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', {pageTitle: 'Add Home to airbnb'});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home Registration successful for:", req.body);
    registeredHomes.push({houseName: req.body.houseName, housePrice: req.body.housePrice, houseLocation: req.body.houseLocation, houseRating: req.body.houseRating, houseImage: req.body.houseImage});
    res.render('homeAdded', {pageTitle: 'Home Added Succesfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
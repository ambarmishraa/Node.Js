const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
    res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
}

exports.postAddHome = (req, res, next) => {
    // console.log("Home Registration successful for:", req.body);
    const {houseName, housePrice, houseLocation, houseRating, houseImage} = req.body;
    const home = new Home(houseName, housePrice, houseLocation, houseRating, houseImage);
    home.save();

    // registeredHomes.push({houseName: req.body.houseName, housePrice: req.body.housePrice, houseLocation: req.body.houseLocation, houseRating: req.body.houseRating, houseImage: req.body.houseImage});

    res.render('homeAdded', {pageTitle: 'Home Added Succesfully', currentPage: "homeAdded"});
}

exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll((registeredHomes) => {
        res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'});
    });
    // console.log("This is value:", registeredHomes);
    
}

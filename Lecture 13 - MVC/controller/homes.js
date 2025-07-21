exports.getAddHome = (req, res, next) => {
    res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
}

const registeredHomes = [];

exports.postAddHome = (req, res, next) => {
    console.log("Home Registration successful for:", req.body);
    registeredHomes.push({houseName: req.body.houseName, housePrice: req.body.housePrice, houseLocation: req.body.houseLocation, houseRating: req.body.houseRating, houseImage: req.body.houseImage});
    res.render('homeAdded', {pageTitle: 'Home Added Succesfully', currentPage: "homeAdded"});
}

exports.getHomes = (req, res, next) => {
    console.log("This is value:", registeredHomes)
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'});
}

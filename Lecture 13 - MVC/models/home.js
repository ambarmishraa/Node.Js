const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil')

// Fake Database (File coming from database)
// let registeredHomes = [];

module.exports = class Home {
    constructor(houseName, housePrice, houseLocation, houseRating, houseImage) {
        this.houseName = houseName;
        this.housePrice = housePrice;
        this.houseLocation = houseLocation;
        this.houseRating = houseRating;
        this.houseImage = houseImage;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const homeDataPath = path.join(rootDir, 'data', 'homes.json');
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
                console.log('File writing concluded', error);
            });
        });

    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (err, data) => {
            // console.log('File Read:', err, data);
            if (!err) {
                callback(JSON.parse(data));
            } else {
                callback([]);
            }
        })
    }
}
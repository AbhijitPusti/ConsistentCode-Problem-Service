const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./sever.config');

async function connectToDB(){
    try {
        if(NODE_ENV== "developement"){
            await mongoose.connect(ATLAS_DB_URL);
            console.log('Mongoose connection readyState:', mongoose.connection.readyState);

        }
       
    } catch (error) {
        console.log('Unable to connect the server');
        console.log(error);
    }
}

module.exports = connectToDB;
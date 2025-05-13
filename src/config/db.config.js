const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./sever.config');

async function connectToDB(){
    try {
        if(NODE_ENV== "development"){
            await mongoose.connect(ATLAS_DB_URL)
        }
       
    } catch (error) {
        console.log('Unable to connect the server');
        console.log(error);
    }
}

module.exports = connectToDB;
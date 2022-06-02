const loglevel = require('loglevel');
const mongoose = require('mongoose');
const config = require('../../config');

async function open() {
    try {
        loglevel.debug("Opening database connection.");
        await mongoose.connect(config.databaseUrl);
    } catch(e) {
        loglevel.error(e);
        mongoose.disconnect();
    }

}

function close() {
    loglevel.debug("Closing database connection.");
    mongoose.disconnect();
}

module.exports= {
    open,
    close,
};

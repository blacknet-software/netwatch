const loglevel = require('loglevel');
const mongoose = require('mongoose');

async function open() {
    try {
        loglevel.debug("Opening database connection.");
        await mongoose.connect('mongodb://localhost:27017/netwatch');
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

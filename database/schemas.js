const { Schema } = require('mongoose');

const nodeSchema =  new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    netaddress: {
      type: String,
      unique: true,
      required: true
    },
    diskSpace: Number,
    diskUsed: Number,
    creationDate: Date,
});


module.exports = {
    nodeSchema
};

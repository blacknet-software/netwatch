const mongoose = require('mongoose');
const schema = require('../../database/schemas');

/* The hardware and computing resources are represented as a 'Node'.  */
class Node {

    constructor(name, netaddress) {
        this.name = name;
        this.netaddress = netaddress;
    }

    getName() {
        return this.name;
    }

    getNetaddress() {
        return this.netaddress;
    }

    /* Populate with data from the database */
    async retrieve() {
        await mongoose.connect('mongodb://localhost:27017/netwatch');
        const Node = mongoose.model('nodes', schema.nodeSchema);
        Node.find({name: this.name});
    }

    /* Saves to database */
    async save() {
        await mongoose.connect('mongodb://localhost:27017/netwatch');
        const Node = mongoose.model('nodes', schema.nodeSchema);
        const node = new Node({
            name: this.getName(),
            netaddress: this.getNetaddress(),
            creationDate: Date.now(),
            diskSpace: 0,
            diskUsed: 0,
        });
        await node.save((exception) => {
            if (exception) {
                console.log(exception);
                mongoose.disconnect();
            } else {
                console.log("successfully added to database.");
                mongoose.disconnect();
            }
        });
    }
}

module.exports = Node;

const mongoose = require('mongoose');
const loglevel = require('loglevel');
const StorageNode = require('../framework/node');

async function execute(options, str) {
    const name = options['name'];
    const netaddress = options['netaddress'];
    if (name == null) {
       loglevel.error("Parameter --name is required");
    } else if(netaddress == null) {
        loglevel.error("Parameter --netaddress is required");
    } else {
        const storagenode = new StorageNode(name, netaddress);
        storagenode.save();
    }
}

function initialize(cli) {
    cli.command('add')
        .description('An automatic migration between servers.')
        .option('--name <name>', "name to identify the node.")
        .option('--netaddress <netaddress>', "ip or domain of the node.")
        .action(execute);
}

module.exports = {
    initialize
};

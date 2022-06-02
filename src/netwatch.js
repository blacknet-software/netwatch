const { Command } = require('commander');

/* Fetching storage node information */


/* Initializing the cli-interface */
const cli = new Command()
    .name('netwatch')
    .description('Management of a storage node network made simple.')
    .version('1.0.0');

/* Initializing commands */
require('./commands/analytics').initialize(cli);          // Summary of the usage status in every node.
require('./commands/add').initialize(cli);             // Adds a node to netwatch.

/* All commands ready. */
cli.parse();

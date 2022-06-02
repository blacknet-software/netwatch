const { Command } = require('commander');

/* Fetching storage node information */


/* Initializing the cli-interface */
const cli = new Command()
    .name('netwatch')
    .description('Management of a storage node network made simple.')
    .version('1.0.0');

/* Initializing commands */
require('./commands/analytics').initialize(cli);          // Summary of the usage status in every node.
require('./commands/analytics').initialize(cli);        // Network health and statistics.
require('./commands/diagnostic').initialize(cli);       // Starts a network diagnostic looking for failures.
require('./commands/add').initialize(cli);             // Adds a node to netwatch.
require('./commands/alerting').initialize(cli);         // Configuration of email warnings.

/* All commands ready. */
cli.parse();

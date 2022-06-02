/* Application entry point */
const database = require('./src/services/database');

/* Logging */
const loglevel = require('loglevel');
loglevel.setLevel('info');

/* Loading config file "netwatch.yaml" */
require('./src/configuration').load();

// /* Initializing database connection */
// database.open().then(() => {

    /* Run application */
    require('./src/netwatch');
// });

/* The command was executed; closing connection. */
// database.close();


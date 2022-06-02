/* Application entry point */
const config = require('./config');

/* Logging */
const loglevel = require('loglevel');
loglevel.setLevel(config.loglevel);

/* Loading environment variables for development */
require('dotenv').config();

/* Run application */
require('./src/netwatch');

/* The command was executed; closing connection. */
// database.close();


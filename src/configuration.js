const yaml = require('yaml');
const fs = require('fs');
const log = require('loglevel');

class ConfigLoader {

    /* Loads the config file "netwatch.yaml" into the application. */
    /* This function must only be invoked once at the index.js */
    load() {
        try {
            const file = fs.readFileSync('./netwatch.yaml', 'utf8');
            this.config = yaml.parse(file);
            log.debug("netwatch.yaml has been loaded.")
        } catch (e) {
            log.error("error while loading netwatch.yaml");
            console.log(e);
        }
    }

    /* Use the configuration variables from netwatch.yaml */
    getConfig() {
        return this.config;
    }
}

const instance = new ConfigLoader();
module.exports = instance;

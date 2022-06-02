const Table = require('cli-table3');
const tableStyle = require('../framework/table-format');

const storj = require('../services/storj');
const table = new Table(tableStyle.defaultTableStyle);

async function populate(address) {
    const nakamoto = await storj.getNode(address);
    table.push([
            nakamoto.name,
            nakamoto.egress + " GB",
            nakamoto.ingress + " GB",
            nakamoto.usd_payout + " USD",
            nakamoto.disk_usage + " GB",
            nakamoto.health
        ]);
}

table.push(
    ['SERVER', 'EGRESS', 'INGRESS', 'USD_PAYOUT', "DISK_USAGE", "HEALTH"],
    ['Nakamoto', '15 GB', '10 GB', '0.00 USD', '[########···········]' , 'OK'],
    ['Lightning', '13 GB', '10 GB', '0.00 USD', '[########···········]' , 'OK'],
    ['Raynor', ' 3 GB', ' 5 GB', '0.00 USD', '[########···········]' , 'OK'],
);

async function execute(str, options) {
    await populate('http://192.168.0.202:14002/');
    await populate('http://192.168.0.202:14003/');
    console.log(table.toString())
}

function initialize(cli) {
    cli.command('summary')
        .description('summary of the usage status in every node.')
        .action(execute);
}

module.exports = {
    initialize
};

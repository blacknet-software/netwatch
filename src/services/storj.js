/* Storj integration for Netwatch through API Rest.
 * Author: Juan Manuel Lozano */

const fetch = require('node-fetch');

async function getNode(address) {
    const result = await getEstimatedPayout(address);
    return ({
        name: 'name',
        ingress: 0,
        egress: parseFloat(result.currentMonth.egressBandwidth / 1e+9).toFixed(2),
        usd_payout: parseFloat(result.currentMonth.payout).toFixed(2),
        disk_usage: parseFloat(result.currentMonth.diskSpace / 1e+9).toFixed(2),
        health: 'OK',
    })
}

async function getEstimatedPayout(url) {
    const response = await fetch(url + '/api/sno/estimated-payout');
    const data = await response.json();
    return data;
}

async function getSatellites(url) {
    const response = await fetch(url + '/api/sno/satellites');
    return await response.json();
}

async function getSatelliteByID(url, id) {
    const response = await fetch(url + '/api/sno/satellite/' + id);
    return await response.json();
}

module.exports = {
    getNode,
};

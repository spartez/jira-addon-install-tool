const got = require('got');

async function getToken({ username, password, url }) {
    const response = await got(`${url}?os_authType=basic`, {
        auth: `${username}:${password}`,
        headers: { Accept: 'application/vnd.atl.plugins.installed+json' }
    });

    return response.headers['upm-token'];
}

async function install({ username, password, host, descriptor }) {
    const url = `https://${host}/rest/plugins/1.0/`;
    const token = await getToken({ username, password, url });
    const response = await got(`${url}?token=${token}`, {
        auth: `${username}:${password}`,
        method: 'POST',
        json: true,
        headers: { 'Content-Type': 'application/vnd.atl.plugins.remote.install+json' },
        body: JSON.stringify({ pluginUri: descriptor })
    });

    return response;
}

module.exports.install = install;

const test = require('ava');
const { install } = require('.');
const nock = require('nock');

test('should contact UPM and update the plugin', async t => {
    nock('https://my-jira.service')
        .get('/rest/plugins/1.0/?os_authType=basic')
        .reply(200, '', { 'upm-token': 'token-acquired-from-jira' });

    nock('https://my-jira.service')
        .post('/rest/plugins/1.0/?token=token-acquired-from-jira', {
            pluginUri: 'https://my-addon.service/descriptor.json'
        })
        .matchHeader('Content-Type', 'application/vnd.atl.plugins.remote.install+json')
        .matchHeader('Accept', 'application/json')
        .matchHeader('authorization', 'Basic bWU6bXktcGFzc3dvcmQ=')
        .reply(200);

    await install({
        username: 'me',
        password: 'my-password',
        host: 'my-jira.service',
        descriptor: 'https://my-addon.service/descriptor.json'
    });

    t.pass();
});

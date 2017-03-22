#!/usr/bin/env node

'use strict';

const meow = require('meow');
const install = require('.');

const cli = meow(`
  Usage
    $ jira-addon-install-tool <options>

  Options
    --host,       -h    JIRA instance host
    --username,   -u    JIRA username
    --password,   -p    JIRA password
    --descriptor, -d    atlassian-connect.json URL

  Example
    $ jira-addon-install-tool \
        --host myjira.atlassian.net \
        --username me \
        --password pass \
        --descriptor https://my.service/remoteapp/registration/atlassian-connect.json 
`, {
  alias: {
    h: 'host',
    u: 'username',
    p: 'password',
    d: 'descriptor'
  }
});

install(cli.flags);
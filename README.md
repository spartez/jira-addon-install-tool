# jira-addon-install-tool

> Install JIRA add-on using the UPM's REST API

## installation

```sh
npm i -g jira-addon-install-tool
```

## cli usage

```
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
```

## API

```js
const { install } = require('jira-addon-install-tool');

install({
    username: 'admin',
    password: 'admin',
    host: 'myjira.atlassian.net',
    descriptor: 'https://my.service/remoteapp/registration/atlassian-connect.json'
}).then(response => {
    console.log(response.status);
});
```

## License
MIT

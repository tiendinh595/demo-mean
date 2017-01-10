/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

module.exports = {
    port: 3000,
    database: {
        host: 'localhost',
        port: 0,
        dbname: 'blog',
        username: 'root',
        password: 1234
    },
    dir: {
        root: __dirname.replace('config', ''),
        app: __dirname.replace('config', '')+'app/',
        controller: __dirname.replace('config', '')+'app/controller/',
        model: __dirname.replace('config', '')+'app/model/',
        router: __dirname.replace('config', '')+'app/routes/',
        resources: __dirname.replace('config', '')+'resources/'
    }
};
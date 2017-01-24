export const dbConfig = {
    mongoDb : {
        //fill this out with your provider (or local)
        username: 'db_tsSsF',
        'password':'testingdata#123',
        'url' : 'ds011261.mlab.com:11261',
        'dbName' : 'newTest'
    }
};

export const serverConfig = {
    webpackDevServerPort : 8080,
    expressPort : 3000
};

export const endpoints = {
    debug : 'http://localhost:3000',
    prod: 'production'
};

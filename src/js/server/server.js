import path from 'path';
import http from 'http';
import express from 'express';
import fs from 'fs';
import httpProxy from 'http-proxy';
import compression from 'compression';
import bodyParser from 'body-parser';

const app = express();
const proxy = httpProxy.createProxyServer();
const server = new http.Server(app);

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../..', 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (__DEVELOPMENT__) {
    app.all('/dist/*', (req, res) => {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}

require('./routes/cardsApi').default(app);
require('./routes/resumeApi').default(app);
require('./routes/sendMailRoute').default(app);
require('./routes/ssrHandler').default(app);

server.listen('3000', (err) => {
    if (err) {
        console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', 'localhost', '3000');
});

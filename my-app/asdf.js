// eslint-disable-next-line @typescript-eslint/no-var-requires, prettier/prettier
const express = require('express');
const next = express('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.get('/', (req, res) => {
        return app.render(req, res, '/');
    });

    server.get('/buyingIphone', (req, res) => {
        return app.render(req, res, '/buyingIphone');
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log('listening to 3000');
    });
});

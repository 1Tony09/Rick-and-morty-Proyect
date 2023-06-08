const express = require('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use(morgan('dev'));

 server.use('/rickandmorty', router);

module.exports = server;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // es para darle el acceso del front al back
//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').pop();
//         getCharById(res, id);
//     }
// }).listen(PORT, 'localhost');
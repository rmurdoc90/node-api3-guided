const express = require('express');
const hubsRouter = require('./hubs/hubs-router.js');
const {
  logger,
  notFound,
  errorHandling,
} = require('./middlewares');

const server = express();

server.use(express.json());

server.use(logger); // f takes req, res, next --> either call next  or send response to client

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API ${req.foo}</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('*', notFound);

// you just do this here
server.use(errorHandling);

module.exports = server;

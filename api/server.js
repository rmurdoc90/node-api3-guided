const express = require('express');
const cors = require('cors')
const hubsRouter = require('./hubs/hubs-router.js');
const {
  logger,
  notFound,
  errorHandling,
} = require('./middlewares');

const server = express();

server.use(express.json());

// f takes req, res, next --> either call next  or send response to client
// server.use(logger);

server.use('/api/hubs', [logger, logger], hubsRouter);

server.get('/', logger, (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API ${req.foo}</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('*', notFound);

// you just do this here at the end of the pipeline
server.use(errorHandling);

module.exports = server;

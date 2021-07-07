const express = require('express');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.log(`req flowing through app`)
  next()
}) // f takes req, res, next --> either call next  or send response to client

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('*', (req, res, next) => { // also can take next if needed
  next({ status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message,
  })
})

module.exports = server;

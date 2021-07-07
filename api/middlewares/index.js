const logger = (req, res, next) => {
  console.log(`${req.method} request`)
  req.foo = 'web 43 is awesome'
  next()
}

const notFound = (req, res, next) => { // also can take next if needed
  res.status(404).json({
    message: 'not found, sorry!'
  })
}

const errorHandling = (err, req, res, next) => { // eslint-disable-line
  const status = err.status || 500
  res.status(status).json({
    message: err.message,
  })
}

module.exports = {
  logger,
  notFound,
  errorHandling,
}

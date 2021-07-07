const logger = (req, res, next) => {
  console.log(`${req.method} request`)
  req.foo = 'bar'
  next()
}

const notFound = (req, res, next) => { // also can take next if needed
  res.status(404).json({
    message: 'not found, sorry!'
  })
}




module.exports = {
  logger,
  notFound,
}

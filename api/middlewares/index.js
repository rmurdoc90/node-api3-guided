const logger = (req, res, next) => {
  console.log(`${req.method} request`)
  req.foo = 'bar'
  next()
}






module.exports = {
  logger
}

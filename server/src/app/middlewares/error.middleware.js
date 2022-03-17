const { ResponseError } = require('../utils/errors')
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR
} = require('../configs/statusCodes')

const errorHandler = (err, req, res, next) => {
  let error = {...err}

  error.message = err.message

  if (err.code === 11000) {
    const message = 'Dublicate Field Value Enter'
    error = new ResponseError(message, BAD_REQUEST)
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message)
    error = new ResponseError(message, BAD_REQUEST)
  }

  res.status(error.statusCode || INTERNAL_SERVER_ERROR).json({
    success: false,
    error: error.message || 'Server Error',
    [err.errors ? 'errors' : ''] : err?.errors
  })
}

module.exports = errorHandler
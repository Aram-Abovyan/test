class ResponseError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statuseCode = statusCode
  }
}

class ValidatorError extends Error {
  constructor(errors, statusCode) {
    super('form validator error')
    this.errors = errors
    this.statusCode = statusCode
  }
}

module.exports = {
  ResponseError,
  ValidatorError
}
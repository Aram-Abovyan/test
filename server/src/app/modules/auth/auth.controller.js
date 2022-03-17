const { validationResult } = require('express-validator')
const User = require('../../models/User')
const sendToken = require('../../helpers/auth.helper')
const { ResponseError, ValidatorError } = require('../../utils/errors')
const {
  SUCCESS_CREATED,
  UNAUTHORIZED
} = require('../../configs/statusCodes')

module.exports = class AuthController {
  static async register(req, res, next) {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return next(new ValidatorError(errors))
    }

    const { username, email, password } = req.body

    try {
      const user = await User.create({
        username,
        email,
        password
      })

      sendToken(user, SUCCESS_CREATED, res)
      
    } catch(error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return next(new ValidatorError(errors))
    }

    const { email, password } = req.body

    try {
      const user = await User.findOne({email}).select('+password')

      if (!user) {
        return next(new ResponseError('Invalid credentials', UNAUTHORIZED))
      }
  
      const isMatch = await user.matchPassword(password)
  
      if (!isMatch) {
        return next(new ResponseError('Wrong password', UNAUTHORIZED))
      }
  
      sendToken(user, SUCCESS_CREATED, res)
    } catch(error) {
      next(error)
    }
  }
}

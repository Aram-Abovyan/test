const { checkSchema } = require('express-validator')
const { registerSchema, loginSchema } = require('../../validator/schemas')
const AuthController = require('./auth.controller')

module.exports = (router) => {
  router.route('/register').post(checkSchema(registerSchema), AuthController.register)
  router.route('/login').post(checkSchema(loginSchema), AuthController.login)
}
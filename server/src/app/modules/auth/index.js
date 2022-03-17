const { Router } = require('express')
const endpoints = require('./endpoints')

module.exports = class AuthModule {
  apiRouter;
  router;

  constructor(apiRouter) {
    this.apiRouter = apiRouter
    this.router = Router()
  }

  createEndpoints() {
    this.assignRouter()
    this.assigneEndpoints()
  }

  assignRouter() {
    this.apiRouter.use('/auth', this.router)
  }

  assigneEndpoints() {
    endpoints(this.router)
  }
}
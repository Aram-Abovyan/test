const endpoints = require('./endpoints')
const { Router } = require('express')
const { protect } = require('../../middlewares/auth.middleware')

module.exports = class WorkspaceModule {
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
    this.apiRouter.use('/workspace',protect, this.router)
  }

  assigneEndpoints() {
    endpoints(this.router)
  }
}
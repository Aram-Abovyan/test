const express = require('express')
const cors = require('cors')
const connectDB = require('./configs/db')
const enableModules = require('./modules')
const errorHandler = require('./middlewares/error.middleware')

class Application {
  app;
  router;

  constructor() {
    this.app = express()
    this.initApp()
  }

  initApp() {
    this.configApp()
    this.configDb()
    this.setRouter()
    this.enableModules()
    this.setErrorHandler()
  }

  configApp() {
    this.app.use(cors())
            .use(express.json())
  }

  configDb() {
    connectDB()
  }

  setRouter() {
    this.router = express.Router()
    this.app.use('/api', this.router)
  }

  enableModules() {
    enableModules(this.router)
  }

  setErrorHandler() {
    this.app.use(errorHandler)
  }
}

module.exports = () => new Application().app
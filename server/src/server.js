require('dotenv').config()
const http = require('http')
const App = require('./app')

const server = http.createServer(App())

const port = process.env.PORT
server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
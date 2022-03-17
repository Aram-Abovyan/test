const AuthModule = require('./auth')
const WorkspaceModule = require('./workspace')
const UserModule = require('./user')

module.exports = (router) => {
  const Auth = new AuthModule(router)
  Auth.createEndpoints()

  const Workspace = new WorkspaceModule(router)
  Workspace.createEndpoints()

  const User = new UserModule(router)
  User.createEndpoints()
}
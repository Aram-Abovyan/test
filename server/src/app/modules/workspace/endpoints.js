const WorkspaceController = require('./workspace.controller')

module.exports = (router) => {
  router.route('/create').post(WorkspaceController.create)
  router.route('/delete').delete(WorkspaceController.delete)
  router.route('/all_my').get(WorkspaceController.getMyWorkspaces)
  router.route('/invite').post(WorkspaceController.invite)
}
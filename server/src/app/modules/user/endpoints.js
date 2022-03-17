const UserController = require('./user.controller')

module.exports = (router) => {
  router.route('/personal_info').get(UserController.getPersonalInfo)
  router.route('/sent_invitations').get(UserController.getSentInvitations)
  router.route('/received_invitations').get(UserController.getReceivedInvitations)
  router.route('/accept_invitation').put(UserController.acceptInvitation)
  router.route('/decline_invitation').put(UserController.declineInvitation)
}
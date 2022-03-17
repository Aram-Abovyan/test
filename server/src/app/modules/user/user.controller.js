const User = require('../../models/User')
const Invitation = require('../../models/Invitation')
const Workspace = require('../../models/Workspace')
const {
  OK,
  BAD_REQUEST
} = require('../../configs/statusCodes')
const { ResponseError } = require('../../utils/errors')


module.exports = class UserController {
  static async getPersonalInfo(req, res, next) {
    try {
      const user = await User.findOne({_id: req.user._id})

      res.status(OK).json(user)
    } catch(error) {
      next(error)
    }
  }

  static async getSentInvitations(req, res, next) {
    try {
      const sentInvitations = await Invitation.find({from: req.user._id})

      res.status(OK).json(sentInvitations)
    } catch(error) {
      next(error)
    }
  }

  static async getReceivedInvitations(req, res, next) {
    try {
      const receivedInvitations = await Invitation.find({to: req.user._id})

      res.status(OK).json(receivedInvitations)
    } catch(error) {
      next(error)
    }
  }

  static async acceptInvitation(req, res, next) {
    const { invitationId } = req.body

    try {
      const invitation = await Invitation.findOne({_id: invitationId})

      if (invitation.status !== 'pending') {
        throw new ResponseError(`invitation status is ${invitation.status}`, BAD_REQUEST)
      }

      invitation.status = 'accepted'
      await invitation.save()

      const workspace = await Workspace.findOne({_id: invitation.workspaceId})
      workspace.members.push(req.user._id)
      await workspace.save()

      res.status(OK).json({success: true})
    } catch(error) {
      next(error)
    }
  }

  static async declineInvitation(req, res, next) {
    const { invitationId } = req.body

    try {
      const invitation = await Invitation.findOne({_id: invitationId})

      if (invitation.status !== 'pending') {
        throw new ResponseError(`invitation status is ${invitation.status}`, BAD_REQUEST)
      }

      invitation.status = 'declined'
      await invitation.save()

      res.status(OK).json({success: true})
    } catch(error) {
      next(error)
    }
  }
  
}
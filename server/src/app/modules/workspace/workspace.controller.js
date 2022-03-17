const Workspace = require('../../models/Workspace')
const Invitation = require('../../models/Invitation')
const {
  OK,
  SUCCESS_CREATED,
  BAD_REQUEST,
  NOT_ALLOWED
} = require('../../configs/statusCodes')
const { ResponseError } = require('../../utils/errors')

module.exports = class WorkspaceController {
  static async create(req, res, next) {
    const { title } = req.body

    try {
      const workspace = await Workspace.create({
        title,
        creator: req.user._id
      })

      res.status(SUCCESS_CREATED).json(workspace)
    } catch(error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    const { workspaceId } = req.body

    try {
      const workspace = await Workspace.findOne({_id: workspaceId})
      console.log(workspace);

      if (String(workspace.creator) !== String(req.user._id)) {
        throw new ResponseError('only creator can delete workspace', NOT_ALLOWED)
      }

      await Workspace.deleteOne({_id: workspaceId})

      res.status(OK).json({success: true})
    } catch(error) {
      next(error)
    }
  }

  static async getMyWorkspaces(req, res, next) {
    try {
      const workspaces = await Workspace.find({creator: req.user._id})
      res.status(SUCCESS_CREATED).json(workspaces)
    } catch(error) {
      next(error)
    }
  }

  static async invite(req, res, next) {
    const { to, workspaceId } = req.body

    try {
      const workspace = await Workspace.findOne({_id: workspaceId})

      if (String(workspace.creator) !== String(req.user._id)) {
        throw new ResponseError('only creator can send request to join', NOT_ALLOWED)
      }

      const invitation = await Invitation.create({
        from: req.user._id,
        to,
        workspaceId,
      })

      res.status(SUCCESS_CREATED).json(invitation)
    } catch(error) {
      next(error)
    }
  }
}
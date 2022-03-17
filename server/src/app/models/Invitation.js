const mongoose = require('mongoose')
const { Schema } = mongoose

const InvitationSchema = new Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace'
  },

  status: {
    type: String,
    default: 'pending'
  }
})

const Invitation = mongoose.model('Invitation', InvitationSchema)

module.exports = Invitation
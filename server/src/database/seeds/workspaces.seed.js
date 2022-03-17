const connectDB = require('../../app/configs/db')
const { faker } = require('@faker-js/faker')
const User = require('../../app/models/User')
const Workspace = require('../../app/models/Workspace')
const mongoose = require('mongoose')

connectDB().catch(error => console.log(error))

const createWorkspacesData = async () => {
  const users = await User.find({})

  return users.map(({ _id: creator }) => {
    const title = faker.word.verb()

    return {
      title,
      creator
    }
  })
}

const seedDB = async () => {
  const workspaceData = await createWorkspacesData()

  await Workspace.insertMany(workspaceData)
}

seedDB()
.then(() => {
  mongoose.connection.close()
  console.log('Success')
})
const connectDB = require('../../app/configs/db')
const { faker } = require('@faker-js/faker')
const bcrypt = require('bcryptjs')
const User = require('../../app/models/User')
const mongoose = require('mongoose')

connectDB().catch(error => console.log(error))

const createSeedUsers = async () => {
  const seedUsers = []

  for (let i = 0; i < 20; i++) {
    const username = faker.name.firstName()
    const email = `${username.toLowerCase()}@gmail.com`
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash('123456', salt)

    seedUsers.push({
      username,
      email,
      password
    })
  }

  return seedUsers
}



const seedDB = async () => {
  await User.deleteMany({})
  await User.insertMany(await createSeedUsers())
}

seedDB()
.then(() => {
  mongoose.connection.close()
  console.log('Success')
})
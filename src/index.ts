import { User } from './models/User'

const collection = User.BuildUserCollection()

collection.on('change', () => {
  console.log(collection)
})

collection.fetch()

const users = [
  {
    id: 1,
    name: 'testing'
  },
  {
    id: 2,
    name: 'another user'
  }
]

module.exports = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (_,data) => {
      const newUser = Object.assign({id: users.length + 1}, data)
      users.push(newUser)
      return newUser
    }
  }
}

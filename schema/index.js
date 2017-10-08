const {makeExecutableSchema} = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type Query {
    allUsers: [User!]!
  }
  type Mutation {
    createUser(name: String!): User
  }
  type User {
    id: ID!
    name: String!
  }
`
module.exports = makeExecutableSchema({typeDefs, resolvers})

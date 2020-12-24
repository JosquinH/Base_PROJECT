const { stringArg, mutationField } = require("@nexus/schema");
const resolvers = require('./resolvers')

const createUserMutationField = mutationField('createUser', {
  type: 'String',
  nullable: false,
  args: { username: stringArg({nullable: false}) },
  resolve: resolvers.createAppUserResolve
})

module.exports = {createUserMutationField}
/**
 * Défini le schéma graphQL en important/exportant les sous-schémas de chaque module
 * et en exportant les type "Racines" (Query/Mutation)
 */

const { mutationType, stringArg } = require('@nexus/schema')

/**
 * Type Racine pour les requêtes graphQL (mutation)
 */
const MutationType = mutationType({
  name: 'Mutation',
  description: 'Racine du Schéma Mutation de GraphQL',
  definition (t) {
    t.string('_', {
      description: 'Test Resolver',
      nullable: true,
      args: { name: stringArg({ nullable: false, description: 'Nom du test' }) },
      resolve: async (_, args, ctx) => {
        await ctx.db.collection('test').insertOne({ name: args.name })
        const a = await ctx.db.collection('test').findOne({ name: args.name })
        return a.name
      }
    })
  }
})

const test = require('./test')
module.exports = { 
  MutationType, 
  ...test 
}

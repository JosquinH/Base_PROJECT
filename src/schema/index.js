/**
 * Point d'entrée du schéma graphQL. Il se charge de :
 * - Importer tous les types graphQL défini à partir du fichier "schema.js"
 */

const { makeSchema } = require('@nexus/schema')
const path = require('path')
const allTypes = require('./schema')

const nexusSchema = makeSchema({
  types: [
    ...Object.values(allTypes)
  ],

  outputs: {
    schema: path.join(__dirname, '/schema.graphql')
  }
})

module.exports = { nexusSchema}

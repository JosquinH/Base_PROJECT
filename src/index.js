require('dotenv').config()

const getApolloServer = require('./apolloServer').default
const { MongoClient } = require('mongodb')

const defaultOptions = { useUnifiedTopology: true, useNewUrlParser: true }
const mongoClientPromise = MongoClient.connect(process.env.MONGO_URL, defaultOptions)


const server = getApolloServer(mongoClientPromise)

server.listen(process.env.PORT, () => {
  console.log(`🚀 Server ready running at http://localhost:${process.env.PORT}  `)
  console.log(`🚀 Playground ready running at http://localhost:${process.env.PORT}/graphql  `)
})

/**
 * Fonction exécutée si un signal d'arrêt est détecté.
 */
const cleanup = () => {
  console.info('Cleaning up')
}
process.on('beforeExit', cleanup)
// process.on('')
process.on('SIGHUP', cleanup)
process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
process.on('SIGBREAK', cleanup)
process.on('SIGUSR2', cleanup)
process.on('message', msg => {
  if (msg === 'shutdown') {
    cleanup()
  }
})

module.exports = {
  server,
  mongoClientPromise
}
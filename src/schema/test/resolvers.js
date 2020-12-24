const collectionName = 'test'

const createAppUserResolve = async (root, {username}, ctx) => {
  const collection = await ctx.db.collection(collectionName)
  await collection.insertOne({username: username})
  return 'toto'
}

module.exports = {
  createAppUserResolve
}
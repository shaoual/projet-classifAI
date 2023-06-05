migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  collection.name = "IA"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  collection.name = "Proposer_des_IA"

  return dao.saveCollection(collection)
})

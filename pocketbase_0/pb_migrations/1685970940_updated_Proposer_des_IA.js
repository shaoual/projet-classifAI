migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4cxbyca",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4cxbyca",
    "name": "date_heure",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})

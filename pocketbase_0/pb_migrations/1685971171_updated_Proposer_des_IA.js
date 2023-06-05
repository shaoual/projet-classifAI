migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // remove
  collection.schema.removeField("oiq4ssty")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oiq4ssty",
    "name": "field2",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

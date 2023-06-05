migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rq6o0m0",
    "name": "Image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rq6o0m0",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c4cxbyca",
    "name": "field1",
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

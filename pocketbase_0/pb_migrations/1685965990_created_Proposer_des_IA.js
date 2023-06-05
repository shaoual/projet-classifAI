migrate((db) => {
  const collection = new Collection({
    "id": "hvdg7lutu9xf879",
    "created": "2023-06-05 11:53:10.247Z",
    "updated": "2023-06-05 11:53:10.247Z",
    "name": "Proposer_des_IA",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dnelg5lp",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xtsk6hyq",
        "name": "field1",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "a3blbrhi",
        "name": "field2",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hvdg7lutu9xf879");

  return dao.deleteCollection(collection);
})

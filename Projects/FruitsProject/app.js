const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://0.0.0.0:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url);

client.connect(url, function(err, db) {
    if (err) throw err;
    var db = client.db(dbName);
    db.collection("fruits").find({}).toArray(function(err, db) {
      if (err) throw err;
      console.log(db);
      db.close();
    });
  }); 

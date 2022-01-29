const MongoClient = require("mongodb").MongoClient
const mongoClient = new MongoClient("mongodb://user:password@localhost:27017/")

module.exports = mongoClient
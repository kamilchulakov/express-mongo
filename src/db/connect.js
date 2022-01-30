const mongoose = require("mongoose")
module.exports.connect = function() {
    mongoose.connect("mongodb://user:password@localhost:27017/")
        .then(() => console.log("Successfully connected to MongoDB."))
        .catch(err => console.error("Connection error :(", err))
}
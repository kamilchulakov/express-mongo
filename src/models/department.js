const mongoose = require("mongoose")

const department = mongoose.model(
    "department",
    new mongoose.Schema({
        name: String,
    })
)

module.exports = department
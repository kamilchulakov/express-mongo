const mongoose = require("mongoose")

const employee = mongoose.model(
    "employee",
    new mongoose.Schema({
        name: String,
        familyName: String,
        phone: String,
        department: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "department"
        }
    })
)

module.exports = employee
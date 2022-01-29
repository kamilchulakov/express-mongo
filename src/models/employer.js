const mongoose = require("mongoose")

const employer = mongoose.model(
    "employer",
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

module.exports = employer
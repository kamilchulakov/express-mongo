const {ObjectId} = require("mongodb");
module.exports.getAllEmployers = async function(req, res) {
    const employers = req.app.employers
    if (employers === undefined) console.log("No employers collection in app!")
    res.send(await employers.find({}).toArray())
}

module.exports.getAllEmployersByDepartment = async function(req, res) {
    const employers = req.app.employers
    if (employers === undefined) console.log("No employers collection in app!")
    res.send(await employers.find({department: req.query.department}).toArray())
}

module.exports.getEmployerById = async function(req, res) {
    const employers = req.app.employers
    if (employers === undefined) console.log("No employers collection in app!")
    if (req.params.id === undefined) {
        res.send("No id param")
        return
    }
    res.send(await employers.find({_id: ObjectId(req.params.id)}).toArray())
}

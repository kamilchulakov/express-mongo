const employers = require("../models/employer")
module.exports.getAllEmployers = async function(req, res) {
    if (employers === undefined) console.log("No employers collection in app!")
    new employers({name: "Bob"}).save()
    res.send(await employers.find({}))
}

module.exports.getAllEmployersByDepartment = async function(req, res) {
    if (employers === undefined) console.log("No employers collection in app!")
    res.send(await employers.find({department: req.query.department}))
}

module.exports.getEmployerById = async function(req, res) {
    if (employers === undefined) console.log("No employers collection in app!")
    if (req.params.id === undefined) {
        res.send("No id param")
        return
    }
    res.send(await employers.findById(req.params.id))
}
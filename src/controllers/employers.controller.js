const employers = require("../models/employer")
module.exports.getAllEmployers = async function(req, res) {
    res.send(await employers.find({}))
}

module.exports.getAllEmployersByDepartment = async function(req, res) {
    res.send(await employers.find({department: req.query.department}))
}

module.exports.getEmployerById = async function(req, res) {
    if (req.params.id === undefined) {
        res.send("No id param")
        return
    }
    res.send(await employers.findById(req.params.id))
}
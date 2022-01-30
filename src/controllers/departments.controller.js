const departments = require("../models/department");
module.exports.getAllDepartments = async (req, res) => {
    res.send(await departments.find({}))
}

module.exports.createDepartment = async (req, res) => {
    const newDepartment = await new departments(req.body).save()
    res.json(newDepartment)
}

module.exports.updateDepartment = async (req, res) => {
    const newDepartment = await departments.updateOne(req.body)
    res.json(newDepartment)
}
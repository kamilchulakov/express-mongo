const employee = require("../models/employee")
module.exports.getAllEmployees = async function(req, res) {
    res.send(await employee.find({}))
}

module.exports.getAllEmployeesByDepartment = async function(req, res) {
    res.send(await employee.find({department: req.query.department}))
}

module.exports.getEmployeeById = async function(req, res) {
    if (req.params.id === undefined) {
        res.send("No id param")
    }
    res.send(await employee.findById(req.params.id))
}

module.exports.setDepartmentToEmployee = async function(req, res) {
    if (req.params.employer === undefined) {
        res.send("No id param")
    }
}
const employee = require("../models/employee")
const departments = require("../models/department")
const {ObjectId} = require("mongodb");
module.exports.getAllEmployees = async function(req, res) {
    res.send(await employee.find({}))
}

module.exports.getAllEmployeesByDepartment = async function(req, res) {
    res.send(await employee.find({department: req.body.department}))
}

module.exports.getEmployeeById = async function(req, res) {
    res.send(await employee.findById(req.params.id))
}

module.exports.setDepartmentToEmployee = async function(req, res) {
    const newEmployee = await employee.findById(req.body.employeeId)
    const department = await departments.findById(req.body.departmentId)
    await newEmployee.update({department: department})
    res.send("Update")
}

module.exports.removeDepartmentFromEmployee = async function(req, res) {
    const employee = await employee.findById(req.body.employeeId)
    await employee.update({department: ObjectId(0)})
    res.send("Removed department")
}

module.exports.createEmployee = async function(req, res) {
    const newEmployee = await new employee(req.body).save()
    res.json(newEmployee)
}

module.exports.deleteEmployee = async function(req, res) {
    await employee.deleteOne({ _id: req.body.id})
    res.send("Delete")
}

module.exports.updateEmployee = async function(req, res) {
    const employee = await employee.updateOne(req.body)
    res.json(employee)
}

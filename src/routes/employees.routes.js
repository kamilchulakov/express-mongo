const express = require('express')
const {getAllEmployees, getEmployeeById, getAllEmployeesByDepartment, setDepartmentToEmployee, deleteEmployee} = require("../controllers/employees.controller");
const {createDepartment} = require("../controllers/departments.controller");
const router = express.Router()

function routeGetEmployeesByParams(req, res) {
    return req.query.department===undefined ? getAllEmployees(req, res) : getAllEmployeesByDepartment(req, res)
}

router.route('/employees')
    .get(routeGetEmployeesByParams)
    .post(createDepartment)
    .patch(setDepartmentToEmployee)
    .delete(deleteEmployee)

router.route('/employees/:id')
    .get(getEmployeeById)

module.exports = router;
const express = require('express')
const {getAllEmployees, getEmployeeById, getAllEmployeesByDepartment, setDepartmentToEmployee, deleteEmployee,
    updateEmployee, removeDepartmentFromEmployee, createEmployee
} = require("../controllers/employees.controller");
const router = express.Router()

function routeGetEmployeesByParams(req, res) {
    return req.query.department===undefined ? getAllEmployees(req, res) : getAllEmployeesByDepartment(req, res)
}

function routePatchEmployees(req, res) {
    return req.body.departmentId ===undefined ? removeDepartmentFromEmployee(req, res) : setDepartmentToEmployee(req, res)
}

router.route('/employees')
    .get(routeGetEmployeesByParams)
    .post(createEmployee)
    .patch(routePatchEmployees)
    .put(updateEmployee)
    .delete(deleteEmployee)

router.route('/employees/:id')
    .get(getEmployeeById)

module.exports = router;
const express = require('express')
const {getAllEmployees, getEmployeeById, getAllEmployeesByDepartment, setDepartmentToEmployee, deleteEmployee,
    updateEmployee, removeDepartmentFromEmployee, createEmployee
} = require("../controllers/employees.controller");
const router = express.Router()

function routeGetEmployeesByParams(req, res) {
    req.log.info(`In route get employees for ${req.url}`)
    return req.query.department===undefined ? getAllEmployees(req, res) : getAllEmployeesByDepartment(req, res)
}

function routePatchEmployees(req, res) {
    req.log.info(`In route patch employees for ${req.url}`)
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
const express = require('express')
const {getAllEmployees, getEmployeeById, getAllEmployeesByDepartment} = require("../controllers/employees.controller");
const router = express.Router()

function routeGetEmployeesByParams(req, res) {
    return req.query.department===undefined ? getAllEmployees(req, res) : getAllEmployeesByDepartment(req, res)
}

router.route('/employees')
    .get(routeGetEmployeesByParams)

router.route('/employees/:id')
    .get(getEmployeeById)

module.exports = router;
const express = require('express')
const {getAllEmployers, getEmployerById, getAllEmployersByDepartment} = require("../controllers/employers.controller");
const router = express.Router()

function routeGetEmployersByParams(req, res) {
    return req.query.department===undefined ? getAllEmployers(req, res) : getAllEmployersByDepartment(req, res)
}

router.route('/employers')
    .get(routeGetEmployersByParams)

router.route('/employer/:id')
    .get(getEmployerById)

module.exports = router;
const express = require('express')
const {getAllDepartments, createDepartment, updateDepartment} = require("../controllers/departments.controller");
const router = express.Router()

router.route('/departments')
    .get(getAllDepartments)
    .post(createDepartment)
    .patch(updateDepartment)

module.exports = router;
const express = require('express')
const {getAllDepartments, createDepartment, updateDepartment, deleteDepartment} = require("../controllers/departments.controller");
const router = express.Router()

router.route('/departments')
    .get(getAllDepartments)
    .post(createDepartment)
    .patch(updateDepartment)
    .delete(deleteDepartment)

module.exports = router;
const express = require('express')
const {getAllEmployers} = require("../controllers/employers.controller");
const router = express.Router()

router.route('/')
    .get(getAllEmployers)

module.exports = router;
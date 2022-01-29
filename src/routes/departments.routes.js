const express = require('express')
const router = express.Router()
const departments = require('../models/department')

router.get('/', async (req, res) => {
    if (departments === undefined) console.log("No departments collection in app!")
    res.send(await departments.find({}))
})

module.exports = router;
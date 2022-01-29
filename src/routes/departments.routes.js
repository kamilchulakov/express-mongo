const express = require('express')
const router = express.Router()
const departments = require('../models/department')

router.get('/', async (req, res) => {
    res.send(await departments.find({}))
})

module.exports = router;
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const departments = req.app.departments
    if (departments === undefined) console.log("No departments collection in app!")
    res.send(await departments.find({}).toArray())
})

module.exports = router;
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const employersRouter = require('./src/routes/employers.routes')
const departmentsRouter = require('./src/routes/departments.routes')
const mongoClient = require('./src/db/db.client')

app.use('/api', employersRouter)
app.use('/api/departments', departmentsRouter)

mongoClient.connect(function(err, client) {
    if (err) return console.log(err)

    // this is used in routes
    app.departments = client.db("testDB").collection("departments")
    app.employers = client.db("testDB").collection("employers")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}/api/employers/ - to work with employers`)
    console.log(`http://localhost:${port}/api/departments/ - to work with departments`)
})
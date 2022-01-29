const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const employersRouter = require('./src/routes/employers.routes')
const departmentsRouter = require('./src/routes/departments.routes')
const {connect} = require('./src/db/connect')
app.use(express.json())
app.use('/api', employersRouter)
app.use('/api/departments', departmentsRouter)

connect()

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    console.log(`http://localhost:${port}/api/employers/ - to work with employers`)
    console.log(`http://localhost:${port}/api/departments/ - to work with departments`)
})
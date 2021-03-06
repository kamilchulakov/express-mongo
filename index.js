const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const employeesRouter = require('./src/routes/employees.routes')
const departmentsRouter = require('./src/routes/departments.routes')
const {connect} = require('./src/db/connect')
const pino = require('pino-http')()

app.use(express.json())
app.use(pino)
app.use('/api', employeesRouter)
app.use('/api', departmentsRouter)

connect()

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    console.log(`http://localhost:${port}/api/employees/ - to work with employers`)
    console.log(`http://localhost:${port}/api/departments/ - to work with departments`)
})
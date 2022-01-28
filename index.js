const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const employers_router = require('./src/routes/employers.routes.js')
const departments_router = require('./src/routes/departments.routes')

app.use('/api/employers', employers_router)
app.use('/api/departments_router', departments_router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}/api/employers/ - to work with employers`)
    console.log(`http://localhost:${port}/api/departments/ - to work with departments`)
})
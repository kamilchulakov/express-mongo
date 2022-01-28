const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const employersRouter = require('./src/routes/employers.routes')
const departmentsRouter = require('./src/routes/departments.routes')
const mongoClient = require('./src/db/db.client')

app.use('/api/employers', employersRouter)
app.use('/api/departments_router', departmentsRouter)

let dbClient;
mongoClient.connect(function(err, client) {
    if (err) return console.log(err)
    dbClient = client;
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        console.log(`http://localhost:${port}/api/employers/ - to work with employers`)
        console.log(`http://localhost:${port}/api/departments/ - to work with departments`)
    })
})

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});
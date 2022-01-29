module.exports.getAllEmployers = async function(req, res) {
    const employers = req.app.employers
    if (employers === undefined) console.log("No departments collection in app!")
    res.send(await employers.find({}).toArray())
}
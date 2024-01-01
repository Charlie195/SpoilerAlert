const { MongoClient } = require("mongodb")

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect("mongodb+srv://Charlie:!Chew1a9ble5VC@spoileralert.q3ksxk6.mongodb.net/?retryWrites=true&w=majority")
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch (err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}
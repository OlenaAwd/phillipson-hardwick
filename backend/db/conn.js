const { MongoCLient, MongoClient } = require("mongodb");
const Db = process.env.MONGO_DB_URL;
const client = new MongoClient(Db, {
    useNewUrlPArser: true,
    useUnifiedTopology: true
})

var _db; 

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            //verify db
            if (db) {
                _db = db.db("clients");
                console.log("Connected to clients mongo");
            }
            return callback(err);
        })
    },
    getDb: function () {
        return _db;
    }
}
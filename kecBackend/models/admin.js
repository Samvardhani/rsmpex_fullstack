var mdb = require ('mongoose')
var adminSchema =mdb.Schema({
    firstname: String,
    lastname: String,
    email:String
})
    var admin_schema=mdb.model("admin",adminSchema)
    module.exports=admin_schema

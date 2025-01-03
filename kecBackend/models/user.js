var mdb = require ('mongoose')
var userSchema =mdb.Schema({
    firstname: String,
    lastname: String,
    email:String
})
    var user_schema=mdb.model("users",userSchema)
    module.exports=user_schema

const Mongoose=require('mongoose')

// userSchema
const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
         type: String,
          required: true 
    },
    role:{
        type:String
    },
    

},{timestamps:true})

const User = Mongoose.model('User', userSchema, 'users');

module.exports=[{
    collectionName:"users",schema:userSchema,model:User,dataBaseName:"CRM"
}]
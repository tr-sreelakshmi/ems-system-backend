//1. import monjoose
const mongoose = require ('mongoose');

//2. connect mongodb
mongoose.connect('mongodb+srv://sreelakshmitr:projectdb@cluster0.ba9eq8l.mongodb.net/EMS-system?retryWrites=true&w=majority');

const Employee = mongoose.model('Employee' ,{
    id:Number ,
    name:String,
    age: Number ,
    designation :String ,
    salary:Number,
})

//export model
module.exports ={
    Employee
}
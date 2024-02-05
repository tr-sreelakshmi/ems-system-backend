// imcport database
const db = require('./db')

//get all employees details from mongodb
const allEmployees =()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }

        else{
            return{
                statusCode:404,
                message:"No Data Found"
            }
        }
    })


    }


    //add all employees details from mongodb

    const addEmployees = (id,name ,age ,designation,salary)=>{
        return db.Employee.findOne({id}).then((result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:"Employee Already Exist"
                }
            }
            else{
                const newEmployee = new db.Employee({id,name, age ,designation ,salary})
                newEmployee.save() //to save new employee details into the database
                return{
                    statusCode:200,
                    message:'Employee Added Successfully'
                }
            }
        })
    }

        //delete a particluar employees details from mongodb
const deleteEmployees= (id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){

            return {
                statusCode:200,
                message:'Employee deteled sucessfully'
            }
        }
         else{
            return{
    
                statusCode:404,
                message:'Employee not found'
            }
        }
    
    } )   
}

// get a particular employee
const getAnEmpl=(id)=>{
 return db.Employee.findOne({id}).then((result)=>{
    if(result){
    return{
        statusCode:200,
        employee:result
    }
         
    }
 })

}

//  update a particular employee
const updateAnEmpl=(empid, id,name ,age ,designation,salary)=>{
return db.Employee.findOne({id:empid}).then((result)=>{
    if(result){
        result.id=id;
        result.name=name;
        result.age=age;
        result.designation=designation;
        result.salary=salary;
result.save(); // to update in  mongodb
return{
    statusCode:200,
    message:'Employee details has been updated sucessfully'
}
    }
    else{
        return{
            statusCode:401,
            message:'Invalid Operation'
        }
    }
})
}
    module.exports={
        allEmployees,
        addEmployees,
        deleteEmployees,
        getAnEmpl,
        updateAnEmpl
    }
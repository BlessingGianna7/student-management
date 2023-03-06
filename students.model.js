const mongoose= require('mongoose');

const   studentSchema= new mongoose.Schema(
    {
        names:{
            type: String,
            required: true,
           
        },
        
        email:{
            type: String,
            required: true,
           
            unique: true
        },
    }
 ); 
 const Students= mongoose.model("students", studentSchema)
  exports.Students= Students
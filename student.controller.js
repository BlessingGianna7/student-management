const {Students}= require("../models/students.model"); 

exports. createStudent= async (req,res)=>{
    try{
        const student= new Students()
            names=req.body.names
            email=req.body.email
            
        
        await student.save();
        res.status(200).send(student);
    }
   catch(err){
    res.status(404).send('err');
   }
  
   
};

exports. viewStudents= async(req,res)=>{
    try{
        const students=  await Students.find()
        res.status(200).send(students)
      
    }catch(err){
        res.staus(404).send('err');
    }
  
};


exports. viewStudentById= async(req,res)=>{
    try{
        const student=  await Student.findById(req.params.id)
        if(student==null) res.status(404).send('invalid student id')
        res.status(200).send(student)
      
    }catch(err){
        res.status(500).send(err);
    }
 
  
};
   

exports. updateStudent= async(req,res)=>{
    try{ 
        const student= await Students.findById(req.params.id)
        if(product==null) res.status(404).send('invalid student id')

        
       student.names=req.body.names
        student.email=req.body.email
 
    
     await student.save();
     res.status(200).send(student)
}catch(err){
    res.status(500).send(err); 
}
};
 
exports. deleteStudent= async (req,res)=>{
    try{
await Students.findByIdAndDelete(req.params.id)
res.status(200).send('student was deleted successfully')

    }catch(err){
        res.status(500).send(err);
    }
}



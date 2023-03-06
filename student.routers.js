const express=require('express');
const router= express.Router();
const {createStudent,viewStudents,viewStudentById,updateStudent,deleteStudent}=require('../controllers/student.controller');
const authMiddleware = require("../middleware/authorisation.middleware");

  
router.post('/students/new', authMiddleware, createStudent);
router.get('/students', authMiddleware,viewStudents);
router.get('/students/:id',authMiddleware, viewStudentById);
router.put('/students/:id/update', authMiddleware,updateStudent);
router.delete('/students/:id/delete',authMiddleware,deleteStudent);
   
module.exports= router;
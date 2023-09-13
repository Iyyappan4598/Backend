const express = require('express')

const router = express.Router();

const userControler=require('../controller/usercontroler')

//Doctor post, get, put, delete
router.post('/doctor/user', userControler.createdoctorData)
router.get('/get/doctor/data',userControler.getdoctorData)
router.get('/get/specific/doctor/data/:id',userControler.getSpecificdoctorData)
router.put('/put/edit/Doctor/:id',userControler.editDoctordata)
router.put('/delete/Doctor/data/:id',userControler.deleteDoctordata)

//Nurse post, get, put, delete
router.post('/nurse/user', userControler.createNurseData)
router.get('/get/Nurse/data',userControler.getNurseData)
router.get('/get/specific/Nurse/data/:id',userControler.getSpecificNurseData)
router.put('/put/edit/Nurse/:id',userControler.editNursedata)
router.delete('/delete/Nurse/data/:id',userControler.deleteNursedata)

//Patient post, get, put. delete
router.post('/Patient/user', userControler.createPatientData)
router.get('/get/Patient/data',userControler.getPatientData)
router.get('/get/specific/Patient/data/:id',userControler.getSpecificPatientData)
router.put('/put/edit/Patient/:id',userControler.editPatientdata)
router.delete('/delete/Patient/data/:id',userControler.deletePatientdata)

module.exports=router;
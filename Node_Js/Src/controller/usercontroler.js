const userServices = require('../services/userservices')
const signupRegisterModel = require("../model/signupRegister");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

//Create Doctor Data
const createdoctorData = async (req, res) => {
    const valueData = await userServices.doctorData(req.body);
    res.send(valueData)
}
//Create Nurse Data
const createNurseData = async (req, res) => {
    const valueData = await userServices.NurseData(req.body);
    res.send(valueData)
}
//Create Patient Data
const createPatientData = async (req, res) => {
    const valueData = await userServices.PatientData(req.body);
    res.send(valueData)
}

//Get Doctor Full Details
const getdoctorData = async (req, res) => {
    const UserDetails = await userServices.getDoctorDetails();
    res.send(UserDetails)
}

//Get Doctor Specific Details only
const getSpecificdoctorData = async (req, res) => {
    const getData = await userServices.getdoctorSpecificData(req.params.id);
    res.send(getData)
}

//Get Nurse Full Details
const getNurseData = async (req, res) => {
    const UserDetails = await userServices.getNurseDetails();
    res.send(UserDetails)
}

//Get Nurse Specific Details only
const getSpecificNurseData = async (req, res) => {
    const getData = await userServices.getNurseSpecificData(req.params.id);
    res.send(getData)
}

//Get Patient Full Details
const getPatientData = async (req, res) => {
    const UserDetails = await userServices.getPatientDetails();
    res.send(UserDetails)
}

//Get Patient Specific Details only
const getSpecificPatientData = async (req, res) => {
    const getData = await userServices.getPatientSpecificData(req.params.id);
    res.send(getData)
}

//Modify or Update Data for Doctor
const editDoctordata = async (req,res)=>{
    const edit = await userServices.updateDoctor(req.params.id,req.body);
    res.send(edit)
}

//Modify or Update Data for Nurse
const editNursedata = async (req,res)=>{
    const edit = await userServices.updateNurse(req.params.id,req.body);
    res.send(edit)
}

//Modify or Update Data for Patient
const editPatientdata = async (req,res)=>{
    const edit = await userServices.updatePatient(req.params.id,req.body);
    res.send(edit)
}

//delete Doctor data
const deleteDoctordata = async(req,res)=>{
    const delData = userServices.deleteDoctorDetail(req.params.id);
    res.send(delData)
}
//delete Nurse data
const deleteNursedata = async(req,res)=>{
    const delData = userServices.deleteNurseDetail(req.params.id);
    res.send(delData)
}
//delete Patient data
const deletePatientdata = async(req,res)=>{
    const delData = userServices.deletePatientDetail(req.params.id);
    res.send(delData)
}

//get Doctor with Nurse
const doctorWithNurse = async(req,res)=>{
    const data = await userServices.doctorwithNurse(req.params.id)
    res.send(data)
}

//doctor with page (Pagination)
const doctorwithPage = async(req,res)=>{
    const page = await userServices.doctorwithPage(req.params.page)
    res.send(page)
}

//Create login

const userAdmin = async (req, res) => {
    const valueData = await userServices.createAdminData(req.body);
    res.send(valueData)
 }

//Check Login
const loginUser = async (req, res) => {
const {Email,password} = req.body;

// const Data = await userServices.Userlogin(Email,password);
// res.send(Data)

const checkUser = await signupRegisterModel.findOne({ Email: Email }); //1st Email is DB, 2nd Email is Fieldname
    const checkPass = await signupRegisterModel.findOne({ password: password }); //1st password is DB, 2nd password is Fieldname
    if (!checkUser || !checkPass) {
    //   console.log("Incorrect username or password");
    res.send({error:"Incorrect username or password"})
    } else {
      const payload = {
        Email: Email,
        password: password,
      };
      const security = crypto.randomBytes(32).toString("hex");
      const create_jwt = jwt.sign(payload, security, { expiresIn: "24hrs" });
      console.log(create_jwt, "create_jwt");
      res.send({message:create_jwt}) ;
    }

}

    module.exports = {
        createdoctorData,
        createNurseData,
        createPatientData,
        getdoctorData,
        getSpecificdoctorData,
        getNurseData,
        getSpecificNurseData,
        getPatientData,
        getSpecificPatientData,
        editDoctordata,
        editNursedata,
        editPatientdata,
        deleteDoctordata,
        deleteNursedata,
        deletePatientdata,
        doctorWithNurse,
        doctorwithPage,
        userAdmin,
        loginUser
    }
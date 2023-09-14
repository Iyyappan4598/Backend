const DoctorModel = require('../model/doctor')
const NurseModel = require('../model/Nurse')
const PatientModel = require('../model/patient')

//Create Doctor Data
const doctorData = async(body)=>{
    const datas=await DoctorModel.create(body);
    return datas;
}

//Create Nurse Data
const NurseData = async(body)=>{
    const datas = await NurseModel.create(body);
    return datas;
}

//Create Patient Data
const PatientData = async(body)=>{
    const datas = await PatientModel.create(body);
    return datas;
}

//Get Doctor Full Details
const getDoctorDetails = async()=>{
    const details = await DoctorModel.aggregate([
        {
            $match:{
                $and:[{active:{$eq:true}}]
            }
        }
    ]);
    return details;
}

//Get Nurse Full Details
const getNurseDetails = async()=>{
    const nursedetails = await NurseModel.aggregate([
        {
            $match:{
                $and:[{active:{$eq:true}}]
            }
        }
    ]);
    return nursedetails;
}

//Get Patient Full Details
const getPatientDetails = async()=>{
    const patientdetails = await NurseModel.aggregate([
        {
            $match:{
                $and:[{active:{$eq:true}}]
            }
        }
    ]);
    return patientdetails;
}

//Get Doctor Specific Details only
const getdoctorSpecificData = async(id)=>{
    const getdocData = await DoctorModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getdocData;
}

//Get Nurse Specific Details only this (id) is parameter
const getNurseSpecificData = async(id)=>{
    const getnurData = await NurseModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getnurData;
}

//Get Patient Specific Details only
const getPatientSpecificData = async(id)=>{
    const getpatData = await PatientModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getpatData;
}

//Modify or Update Data for Doctor
const updateDoctor = async(id,body)=>{
    const updateData = await DoctorModel.findById(id);
    console.log(updateData)
    if(! updateData){
        console.log("Data Not found Please check")
    }
    const data = await DoctorModel.findByIdAndUpdate({_id:id}, body,{new:true});
    return data;
}

//Modify or Update Data for Nurse
const updateNurse = async(id,body)=>{
    const updateData1 = await NurseModel.findById(id);
    console.log(updateData1)
    if(! updateData1){
        console.log("Data Not found Please check")
    }
    const data = await NurseModel.findByIdAndUpdate({_id:id}, body,{new:true});
    return data;
}

//Modify or Update Data for Patient
const updatePatient = async(id,body)=>{
    const updateData2 = await PatientModel.findById(id);
    console.log(updateData2)
    if(! updateData2){
        console.log("Data Not found Please check")
    }
    const data = await PatientModel.findByIdAndUpdate({_id:id}, body,{new:true});
    return data;
}

//Delete Doctor Data
const deleteDoctorDetail = async(id)=>{
    const checkId = await DoctorModel.findById(id);
    console.log(checkId)
    if(! checkId){
        console.log("Data Not found Please check")
    }
    const datas = await DoctorModel.findByIdAndRemove(id);
    return datas;
}

//Delete Nurse Data
const deleteNurseDetail = async(id)=>{
    const checkIdData1 = await NurseModel.findById(id);
    console.log(checkIdData1)
    if(! checkIdData1){
        console.log("Data Not found Please check")
    }
    const datas = await NurseModel.findByIdAndRemove(id);
    return datas;
}

//Delete Patient Data
const deletePatientDetail = async(id)=>{
    const checkIdData2 = await PatientModel.findById(id);
    console.log(checkIdData2)
    if(! checkIdData2){
        console.log("Data Not found Please check")
    }
    const datas = await PatientModel.findByIdAndRemove(id);
    return datas;
}

module.exports={
    doctorData,
    NurseData,
    PatientData,
    getDoctorDetails,
    getNurseDetails,
    getPatientDetails,
    getdoctorSpecificData,
    getNurseSpecificData,
    getPatientSpecificData,
    updateDoctor,
    updateNurse,
    updatePatient,
    deleteDoctorDetail,
    deleteNurseDetail,
    deletePatientDetail

}
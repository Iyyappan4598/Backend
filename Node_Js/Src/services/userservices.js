const DoctorModel = require('../model/doctor')
const NurseModel = require('../model/Nurse')
const PatientModel = require('../model/patient')

const doctorData = async(body)=>{
    const datas=await DoctorModel.create(body);
    return datas;
}

const NurseData = async(body)=>{
    const datas = await NurseModel.create(body);
    return datas;
}

const PatientData = async(body)=>{
    const datas = await PatientModel.create(body);
    return datas;
}

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

const getdoctorSpecificData = async()=>{
    const getdocData = await DoctorModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getdocData;
}

const getNurseSpecificData = async()=>{
    const getnurData = await NurseModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getnurData;
}

const getPatientSpecificData = async()=>{
    const getpatData = await PatientModel.aggregate([
        {
            $match:{
                $and:[{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getpatData;
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
    getPatientSpecificData
}
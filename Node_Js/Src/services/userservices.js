const userModel = require('../model/doctordetails')

const createuser = async(body)=>{
    const datas=await userModel.create(body);
    return datas;
}
const getUserDetails = async()=>{
    const details = await userModel.aggregate([
        {
            $match:{
                $and:[{active:{$eq:true}}]
            }
        }
    ]);
    return details;
}
module.exports={
    createuser,
    getUserDetails
}
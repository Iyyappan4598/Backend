const userServices = require('../services/userservices')

const createuser = async(req,res)=>{
    const valuesData=await userServices.createuser(req.body);
    res.send(valuesData)
}
const getUser = async(req,res)=>{
    const UserDetails = await userServices.getUserDetails();
    res.send(UserDetails)
}

module.exports={
    createuser,
    getUser
}
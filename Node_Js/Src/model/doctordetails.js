const mongoose = require("mongoose");
const {v4}=require('uuid')
const registerSchema = new mongoose.Schema({
  _id: {
    type: String,
    default:v4
  },
  Name: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  department:{
    type: String,
  },
  sallery:{
    type: Number,
  },
  active:{
    type:Boolean,
    default:true,
  }
});
const register = mongoose.model("Doctor", registerSchema);
module.exports = register;

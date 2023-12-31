const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    NurseID: {
        type: String
    },
    PatientNum: {
        type: Number,
    },
    Name: {
        type: String,
    },
    age:{
        type: Number,
    },
    Disease: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    RoomNum: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

const register = mongoose.model("patient", registerSchema);
module.exports = register;
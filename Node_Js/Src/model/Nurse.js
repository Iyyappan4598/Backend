const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    DoctorID: {
        type: String
    },
    EmpId: {
        type: String,
    },
    Name: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    Jobrole: {
        type: String,
    },
    sallery: {
        type: Number,
    },
    location: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

const register = mongoose.model("Nurse", registerSchema);
module.exports = register;
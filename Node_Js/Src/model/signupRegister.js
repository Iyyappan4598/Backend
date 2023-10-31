const mongoose = require("mongoose");
const { v4 } = require('uuid')
const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    Name: {
        type: String,
    },
    Age: {
        type: Number,
    },
    Email: {
        type: String,
    },
    password: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
    }
});

const register = mongoose.model("signupRegister", registerSchema);
module.exports = register;
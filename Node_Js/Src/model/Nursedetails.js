const mongo = require("mongoose");
const { v4 } = require('uuid')
const regSchema = new mongo.Schema({
    _id: {
        type: String,
        default: v4
    },
    Name: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    department: {
        type: String,
    },
    sallery: {
        type: Number,
    },
    active: {
        type: Boolean,
        default: false,
    }
});

const stored = mongoose.model("Nurse", regSchema);
module.exports = stored;
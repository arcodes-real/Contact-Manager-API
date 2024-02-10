const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Please add the contact name"]
    },

    email: {
        type: String,
        required: [true, "Please add the contact email address"]
    },

    phone: {
        type: Number,
        required: [true, "Please add the contact phone number"]
    }
},
{ timestamps : true }
);

module.exports = mongoose.model("Contact", ContactSchema);
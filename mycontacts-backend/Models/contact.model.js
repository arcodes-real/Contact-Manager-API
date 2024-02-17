const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
 // used to handle the relationship between the user and the contact schema   
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },


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
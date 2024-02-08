const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser : true })
// .then(() =>{
//     console.log("Successfully Connected");
// }).catch((err) => {
//     console.log("Error connecting to Database",err);
// });

async function connect(){
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log("Successfully connected to ",
        connect.connection.host,
        connect.connection.name)   
    }
    catch(err){
        console.log("Error connecting Database", err);
        process.exit(1);
    }
}

module.exports = {connect};
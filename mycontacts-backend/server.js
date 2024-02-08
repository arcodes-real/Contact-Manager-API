const express = require("express");
const dotenv = require("dotenv").config();
const {errorToJson }  = require("./middlewares/errorHandler");
const {connect} = require("./Config/dbConnection");

connect();

// importing the routes
const contactsRoute = require("./routes/contact.routes");


const PORT = process.env.port || 5000;
const app = express();

// middleware to pass data
app.use(express.json());

// middlewares
app.use('/api/contacts',contactsRoute);


// custom error handling middleware
app.use(errorToJson);


app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
})
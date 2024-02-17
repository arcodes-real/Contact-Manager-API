const express = require("express");
const dotenv = require("dotenv").config();
const {errorToJson }  = require("./middlewares/errorHandler");
const {connect} = require("./Config/dbConnection");

// CONNECTION TO DATABASE
connect();

// importing the routes
const contactRoutes = require("./routes/contact.routes");
const userRoutes = require("./routes/user.routes");


const PORT = process.env.port || 5001;
const app = express();

// middleware to pass data
app.use(express.json());

// middlewares
app.use('/api/contacts',contactRoutes);
app.use('/api/users',userRoutes);


// custom error handling middleware
// app.use(errorToJson);


app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`);
})
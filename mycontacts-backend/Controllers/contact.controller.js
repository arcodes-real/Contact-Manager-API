// controller contains all the logic to handle requests from the database

const asyncHandler = require("express-async-handler");
// @desc GET all contacts
// @route /api/contacts
// @access public

const getAllContacts = asyncHandler((req, res) =>{
    res.status(200).json({message: "get all contacts"});
});

// @desc GET contact from :id
// @route /api/contacts/:id
// @access public

const getContactFromId = asyncHandler((req, res) =>{
    res.status(200).json({message: `get contact for ${req.params.id}`});
});

// @desc CREATE new contact
// @route /api/contacts/
// @access public

const createContact = asyncHandler((req, res) =>{
    const {name, email, phone} = req.body;
    // if the user doesn't provide the body inputs ..error handling
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    res.status(201).json({message: "create contacts"});
});

// @desc UPDATE contact for id
// @route /api/contacts/:id
// @access public

const updateContact = asyncHandler((req, res) =>{
    res.status(200).json({message: `update contact for ${req.params.id}`});
});

// @desc DELETE contact for id
// @route /api/contacts/:id
// @access 

const deleteContact = asyncHandler((req, res) =>{
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});

module.exports = {getAllContacts, getContactFromId, createContact, updateContact, deleteContact};
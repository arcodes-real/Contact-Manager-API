// controller contains all the logic to handle requests from the database
const Contact = require("../Models/contact.model");
const asyncHandler = require("express-async-handler");
// @desc GET all contacts
// @route /api/contacts
// @access public

const getAllContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @desc GET contact from :id
// @route /api/contacts/:id
// @access public

const getContactFromId = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({ message : "Contact not found" });
    }
    res.status(200).json(contact);
});

// @desc CREATE new contact
// @route /api/contacts/
// @access public

const createContact = asyncHandler(async (req, res) =>{
    const {name, email, phone} = req.body;
    // if the user doesn't provide the body inputs ..error handling
    if(!name || !email || !phone){
        res.status(400).json({ message: "All fields are required" })
    }

    const newContact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(newContact);
});

// @desc UPDATE contact for id
// @route /api/contacts/:id
// @access public

const updateContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );
    res.status(200).json(updatedContact);
});

// @desc DELETE contact for id
// @route /api/contacts/:id
// @access 

const deleteContact = asyncHandler(async(req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({ message: "Contact not found" });
    }

    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {getAllContacts, getContactFromId, createContact, updateContact, deleteContact};
const router = require("express").Router();
const {getAllContacts,
     getContactFromId, 
     createContact, 
     updateContact, 
     deleteContact} = require("../Controllers/contact.controller");



// GET all contacts
router.route("/").get(getAllContacts);

// CREATE contacts
router.route("/").post(createContact);

// GET contact for :id
router.route("/:id").get(getContactFromId);

// UPDATE contact for :id
router.route("/:id").put(updateContact);

// DELETE contact for :id
router.route("/:id").delete(deleteContact);



module.exports = router;

// since GET all contacts and CREATE contacts have the same route, we can chain the HTTP methods
// same for GET a single contact, UPDATE and DELETE

// router.route("/").get(getAllContacts).post(createContact);
// router.route("/:id").get(getContactFromId).put(updateContact).delete(deleteContact);
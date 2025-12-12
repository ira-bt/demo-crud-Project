const contactService = require("../services/contactServices");
//feature 1: creating contact
async function createContact(req,res) {
    try{
        const {name, email, phone} = req.body;
        const contact = await contactService.createContact(name, email, phone);
        res.status(201).json(contact);
    }

    catch(error)
    {
        res.status(500).json({message:"Server Error"});
    }
}

//feature 2: getting all contacts
async function getContacts(req,res) {
    try
    {
        const contacts = await contactService.getContacts();
        res.status(200).json(contacts);
    }
    catch(error)
    {
        res.status(500).json({message:"Server Error"});
    }
    
}

module.exports = {createContact,getContacts};   
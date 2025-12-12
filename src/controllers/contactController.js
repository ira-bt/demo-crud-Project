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

//feature 3: get contact by id
async function getContactById(req,res) {
    try{
        const id = req.params.id;
        const contact = await contactService.getContactById(id);
        if(!contact)
        {
            return res.status(404).json({message:"Contact not found!"});
        }
        res.status(200).json(contact);
    }
    catch(error)
    {
        res.error(500).json({message:"Server Error"})
    }
    
}

module.exports = {createContact,getContacts,getContactById};   
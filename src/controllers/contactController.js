const contactService = require("../services/contactServices");
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
module.exports = {createContact};   
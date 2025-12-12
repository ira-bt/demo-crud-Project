const pool = require("../config/db");
//feature 1 : creating contacts
async function createContact(name, email, phone) {
    try{
        const query = `INSERT INTO contacts(name, email, phone) VALUES ($1,$2,$3) RETURNING *`; 
        const result = await pool.query(query,[name,email,phone]);
        return result.rows[0];
    }
    catch(error)
    {
        console.error("Error creating Contact: ", error);
        throw error;
    }
}

//feature 2: getting all contacts
async function getContacts() {
    try{
        const result = await pool.query("SELECT * FROM contacts");
        return result.rows;
    }
    catch(error)
    {
        console.error("Error fetching contacts:",error);
        throw error;
    }
    
}

//feature 3: get contact by Id
async function getContactById(id) {
    try{
        const result = await pool.query("SELECT * FROM contacts WHERE id = $1",[id]);
        return result.rows[0];
    }
    catch(error)
    {
        console.error("Error fetching contacts by ID:",error);
        throw error;
    }
    
}

//feature 4: update contact
async function updateContact(id, name, email, phone) {
    try
    {
        const query = `
                UPDATE contacts SET name = $1, email = $2, phone = $3
                WHERE id = $4
                RETURNING *        
        `;
        const result = await pool.query(query,[name,email,phone,id]);
        return result.rows[0];
    }
    catch(error)
    {
        console.error("Error Updating a contact!",error);
        throw error;
    }
    
}

//feature 5: delete contact
async function deleteContact(id) {
    try {
        const result = await pool.query("DELETE FROM contacts WHERE id = $1 RETURNING *",[id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error deleting contact:",error)
    }
    
}

module.exports = {createContact,getContacts,getContactById,updateContact,deleteContact};

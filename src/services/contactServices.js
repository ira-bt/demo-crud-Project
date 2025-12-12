const pool = require("../config/db");

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

module.exports = {createContact};

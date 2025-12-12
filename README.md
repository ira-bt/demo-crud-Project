# demo-crud-Project
# demo-crud-project — Contact Management API

A simple **Node.js + Express + PostgreSQL** CRUD application for managing contacts.  


---

## Features

- Create a new contact  
- Retrieve all contacts  
- Retrieve a contact by ID  
- Update a contact  
- Delete a contact  
- PostgreSQL database integration  

---

## Tech Stack

- Node.js  
- Express.js  
- PostgreSQL  
- pg (node-postgres)  
- Nodemon  

---


## Database Schema

Run the following SQL in **pgAdmin** or **psql**:

```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL
);



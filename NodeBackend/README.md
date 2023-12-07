# dockerAngularNginxNodePostgreSQL

# Test PR Rule

if you create the database more than once with docker compose up,
anf you want to create the database again run:
    docker compose down --volumes
will destroy previous volumes and run the init.sh script ag


```javascript
// Import required libraries
const express = require('express');
const axios = require('axios');
const { Pool } = require('pg');
const { Pool } = require('pg');

// Create an instance of express app
const app = express();
app.use(express.json());

// Create a PostgreSQL connection pool
const pool = new Pool({
user: 'your_username',
host: 'your_host',
database: 'your_database',
password: 'your_password',
port: 5432, // your PostgreSQL port
});

// Define an endpoint to fetch all records from the table
app.get('/records', async (req, res) => {
try {
const client = await pool.connect(); // Get a client connection from the pool

// Execute the database query
const result = await client.query('SELECT * FROM event');

client.release(); // Release the client connection back to the pool

// Send the result as response
res.json({ records: result.rows });
} catch (error) {
console.error('Error retrieving records:', error);
res.status(500).json({ error: 'Failed to retrieve records' });
}
});

// Start the server
app.listen(3000, () => {
console.log('Server is running on port 3000');
});
```
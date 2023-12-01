import express from 'express'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pg = require('pg')
//const axios = require('axios');
const { Pool } = require('pg');


const app = express()
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'docker',
    password: 'postgres',
    port: 5432, // your PostgreSQL port
    });


app.get('/', (req, res) => {
    res.send('Hello, World! Mark Kendall');
    });

app.get('/event', (req, res) => {
    res.send('Hello, Events.');
    });

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

app.use(express.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });

export default app;
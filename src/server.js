import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mysql from 'mysql2/promise';
import configViewEngine from './configs/viewEngine.js';
import webRouter from './routers/web.js';

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

// Config template engine and static files
configViewEngine(app);

// Declare router
app.use('/', webRouter);

// Test MySQL connection
async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3307,
      user: 'root',
      password: '123456',
      database: 'hoidanit',
    });

    const [results, fields] = await connection.query('SELECT * FROM Users u;');
    console.log('Check result:', results);
    console.log('Check fields:', fields);
  } catch (err) {
    console.error('MySQL Error:', err);
  }
}

testConnection();

// Start server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
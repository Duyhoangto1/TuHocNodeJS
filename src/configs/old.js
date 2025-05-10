import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection;

async function initDatabase() {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3307,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'test',
    });

    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process if the database connection fails
  }
}

export { connection, initDatabase };
import express from 'express';
import dotenv from 'dotenv';
import configViewEngine from './configs/viewEngine.js';
import webRouter from './routers/web.js';
import { initDatabase } from './configs/database.js';
import methodOverride from 'method-override';

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Dòng này quan trọng
// Initialize database connection
await initDatabase();

// Configure template engine and static files
configViewEngine(app);

// Configure router
app.use('/', webRouter);

// Start server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
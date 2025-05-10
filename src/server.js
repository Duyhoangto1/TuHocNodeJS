import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import webRouter from './routers/web.js';
import { initDatabase } from './configs/database.js'; // ✅ Thêm dòng này

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || 'localhost';

await initDatabase(); // ✅ Gọi khởi tạo DB trước khi dùng

configViewEngine(app);
app.use('/', webRouter);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

import express from 'express';
import { getHomePage, getABC, getSample } from '../controllers/homeController.js';

const router = express.Router();

// Declare routes
router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/sample', getSample);

export default router;
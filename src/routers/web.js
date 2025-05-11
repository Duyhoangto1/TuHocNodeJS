import express from 'express';
import {
  getHomePage,
  getSample,
  postCreateUser,
  getUser,
  getEditUser,
  getCreateUser,
  getViewUser,
  updateUser,
  getDeleteUser,
} from '../controllers/homeController.js';

const router = express.Router();

// Declare routes
router.get('/', getHomePage); // Home page
router.get('/sample', getSample); // Sample route
router.get('/create-user', getCreateUser); // Create user form
router.post('/add', postCreateUser); // Add a new user
router.get('/users', getUser); // List all users

router.get('/users/:id', getViewUser); // View user details
router.get('/users/:id/edit', getEditUser); // Edit user form
router.put('/users/:id', updateUser); // Update user

router.get('/users/:id/delete', getDeleteUser); // Delete confirmation

export default router;
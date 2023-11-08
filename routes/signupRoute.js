import express from 'express';
import userController from '../controllers/signupController.js';

const router = express.Router();

// Route for user registration
router.post('/signup', userController.registerUser);

export default router;



import express from 'express';
import { createUser, updateUser } from '../controllers/userController.js';  
import { saveComment } from '../controllers/commentController.js'; 
const router = express.Router();

router.post('/create', createUser);
router.put('/update/:id', updateUser);


router.post('/comment', saveComment);

export default router;

import express from 'express';

import { deleteUser } from '../controllers/UserController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js';

router.delete('/:id',authMiddleWare, deleteUser)
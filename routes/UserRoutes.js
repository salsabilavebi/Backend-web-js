import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

import {verifyUser, adminOnly} from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/Users', verifyUser,  adminOnly, getUsers);
router.get('/Users/:id', verifyUser,  adminOnly, getUserById);
router.post('/Users', verifyUser,  adminOnly, createUser);
router.patch('/Users/:id', verifyUser,  adminOnly, updateUser);
router.delete('/Users/:id', verifyUser,  adminOnly, deleteUser);

export default router;
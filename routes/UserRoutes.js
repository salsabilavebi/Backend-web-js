import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controller/UserController.js";

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUserById);
router.post('/Users', createUser);
router.patch('/Users/:id', updateUser);
router.delete('/Users/:id', deleteUser);

export default router;
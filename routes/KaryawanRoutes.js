import express from "express";
import {
    getKaryawans,
    getKaryawanById,
    saveKaryawan,
    updateKaryawan,
    deleteKaryawan
} from "../controller/KaryawanController.js";
import {verifyUser, adminOnly} from "../middleware/AuthUser.js";
const router = express.Router();


router.get('/karyawans',verifyUser, adminOnly, getKaryawans);
router.get('/karyawans/:id',verifyUser, adminOnly, getKaryawanById);
router.post('/karyawans',verifyUser, adminOnly, saveKaryawan);
router.patch('/karyawans/:id',verifyUser, adminOnly, updateKaryawan);
router.delete('/karyawans/:id',verifyUser, adminOnly, deleteKaryawan);


export default router;
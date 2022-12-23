import express from "express";
import {
    getKaryawans,
    getKaryawanById,
    saveKaryawan,
    updateKaryawan,
    deleteKaryawan
} from "../controller/KaryawanController.js";

const router = express.Router();

router.get('/karyawans', getKaryawans);
router.get('/karyawans/:id', getKaryawanById);
router.post('/karyawans', saveKaryawan);
router.patch('/karyawans/:id', updateKaryawan);
router.delete('/karyawans/:id', deleteKaryawan);

export default router;
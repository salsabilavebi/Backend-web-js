import express from "express";
import {
    getGaleris,
    getGaleriById,
    saveGaleri,
    updateGaleri,
    deleteGaleri
} from "../controller/GaleriController.js";

const router = express.Router();

router.get('/Galeris', getGaleris);
router.get('/Galeris/:id', getGaleriById);
router.post('/Galeris', saveGaleri);
router.patch('/Galeris/:id', updateGaleri);
router.delete('/Galeris/:id', deleteGaleri);

export default router;
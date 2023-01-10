import express from "express";
import {
    getGaleris,
    getGaleriById,
    saveGaleri,
   
} from "../controller/GaleriController.js";

const router = express.Router();

router.get('/Galeris', getGaleris);
router.get('/Galeris/:id', getGaleriById);
router.post('/Galeris', saveGaleri);


export default router;
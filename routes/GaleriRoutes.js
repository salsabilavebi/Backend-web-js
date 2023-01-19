import express from "express";
import {
    getGaleris,
    getGaleriById,
    saveGaleri,
   
} from "../controller/GaleriController.js";

const router = express.Router();

router.get('/galeris', getGaleris);
router.get('/galeris/:id', getGaleriById);
router.post('/galeris', saveGaleri);


export default router;
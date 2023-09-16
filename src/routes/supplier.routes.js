import { Router } from 'express';
import { getSupplier, getSupplie, createSupplier, updateSupplier, deleteSupplier } from '../controllers/supplier.controller.js'; 

const router = Router();

router.get("/supplier", getSupplier);
router.post("/supplier", createSupplier);
router.put("/supplier/:id", updateSupplier);
router.delete("/supplier/:id", deleteSupplier);
router.get("/supplier/:id", getSupplie);

export default router;
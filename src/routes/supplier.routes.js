import { Router } from 'express';
import { getSupplier, getSupplie, createSupplier, updateSupplier, toggleSupplierStatus, deleteSupplier } from '../controllers/supplier.controller.js'; 

const router = Router();

router.get("/supplier/:id", getSupplie);  
router.get("/supplier", getSupplier);     
router.post("/supplier", createSupplier); 
router.put("/supplier/:id", updateSupplier);
router.patch("/supplier/:id", toggleSupplierStatus);  
router.delete('/supplier/:id', deleteSupplier);

export default router;

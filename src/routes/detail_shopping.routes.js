import { Router } from 'express';
import { getPurchasedetail, getpurchasedetail, createPurchasedetail } from '../controllers/detail_shopping.controller.js' 

const router = Router();

router.get("/detail-shopping", getPurchasedetail); 
router.get("/detail-shopping/:id", getpurchasedetail); 
router.post("/detail-shopping", createPurchasedetail); 

export default router;

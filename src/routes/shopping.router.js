import { Router } from 'express';
import { getShop, getShopping, createShopping, updateShopping, enableShopping} from '../controllers/shopping.controller.js'

const router = Router();

router.get("/shopping", getShop);
router.post("/shopping", createShopping);
router.put("/shopping/:id", updateShopping);
router.get("/shopping/:id", getShopping);
router.put("/shopping/enable/:id", enableShopping);


export default router;

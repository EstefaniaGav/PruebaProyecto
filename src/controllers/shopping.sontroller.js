import { shopping } from '../models/shopping.model.js';
import { detail_shopping } from '../models/detail_shopping.model.js';

export const getShop = async (req, res) => {
    try {
        const shop = await shop.findAll()
        res.json(shop)
    } catch (error) {
        return res.status(500).json({message : error.message})        
    }
}
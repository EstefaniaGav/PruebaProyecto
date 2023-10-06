import { supplies } from '../models/supplies.model.js';
import { detail_shopping } from '../models/detail_shopping.model.js';


export const createPurchasedetail = async (req, res) => {
    try {
        const { Cantidad, ID_INSUMOS } = req.body;
        const insumo = await supplies.findByPk(ID_INSUMOS);
        if (!insumo) {
            return res.status(404).json({ message: 'Insumo no encontrado.' });
        }
        const Valor_Insumo = insumo.Cantidad_Insumo * Cantidad;
        const createPurchasedetail = await detail_shopping.create({
            Cantidad,
            Valor_Insumo,
            ID_INSUMOS,
        });

        res.json(createPurchasedetail);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPurchasedetail  = async (req, res) => {
    try {
        const detail = await supplies.findAll()
        res.json(detail)
    } catch (error) {
        return res.status(500).json({message : error.message})        
    }
}

export const getpurchasedetail = async (req, res) => {
    const { id } = req.params;
    try {                                                                                                                 
        const onedetail = await supplies.findOne({
            where: {
            ID_DETALLE_COMPRAS: id
            }, include: {
                model: supplies,
                attributes: ['Cantidad_Insumo', 'Valor_Insumo'] 

            }
        });
        res.json(onedetail);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



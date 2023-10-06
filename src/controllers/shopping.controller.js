import { shopping } from '../models/shopping.model.js';
import { detail_shopping } from '../models/detail_shopping.model.js';
import { supplier } from '../models/supplier.model.js';
import { supplies } from '../models/supplies.model.js';

export const getShop = async (req, res) => {
    try {
        const shops = await shopping.findAll({
            include: [
                {
                    model: supplier,
                    attributes: ['ID_PROVEEDOR', 'Cedula', 'Nombre', 'Telefono', 'Email', 'Ciudad', 'Estado']
                },
                {
                    model: detail_shopping,
                    attributes: ['ID_DETALLE_COMPRAS', 'Cantidad', 'Valor_Insumo']
                }
            ]
        });
        res.json(shops);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getShopping = async (req, res) => {
    const { id } = req.params;
    try {
        const oneShop = await shopping.findOne({
            where: {
                ID_COMPRAS: id
            },
            include: [
                {
                    model: supplier,
                    attributes: ['ID_PROVEEDOR', 'Cedula', 'Nombre', 'Telefono', 'Email', 'Ciudad', 'Estado']
                },
                {
                    model: detail_shopping,
                    attributes: ['ID_DETALLE_COMPRAS', 'Cantidad', 'Valor_Insumo']
                }
            ]
        });
        res.json(oneShop);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createShopping = async (req, res) => {
    try {
        const { ID_PROVEEDOR, Fecha_Compra,  Valor_Compra, Estado } = req.body;

        const createShopping = await shopping.create({
            Fecha_Compra,
            ID_PROVEEDOR,
            Valor_Compra,
            Estado
        });

        res.json(createShopping);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateShopping = async (req, res) => { 
    const { id } = req.params;
    try {
        const updateShopping = await shopping.findOne({
            where: {
                ID_COMPRAS: id
            }
        });

        updateShopping.set(req.body);
        await updateShopping.save();
        return res.json(updateShopping);           
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const enableShopping = async (req, res) => {
    const { id } = req.params;
    try {
        const enabledShopping = await shopping.findOne({
            where: {
                ID_COMPRAS: id
            }
        });

        if (enabledShopping) {
            enabledShopping.Estado = true;
            await enabledShopping.save();
            return res.json({ message: 'Compra habilitada exitosamente.' });
        } else {
            return res.status(404).json({ message: 'Compra no encontrada.' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

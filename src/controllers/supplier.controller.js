import {supplier} from '../models/supplier.model.js'

export const getSupplier = async (req, res) => {
    try {
        const ArraySupplier = await supplier.findAll();
        res.json(ArraySupplier);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getSupplie = async (req, res) => {
    const { id } = req.params;
    try {                                                                                                                 
        const oneSupplier = await supplier.findOne({
            where: {
                ID_PROVEEDOR: id
            }
        });
        res.json(oneSupplier);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createSupplier = async (req, res) => {
    try {
        const { Nombre, Apellido, Insumo, Telefono, Ciudad, Email } = req.body;

        const createSupplier = await supplier.create({
            Nombre,
            Apellido,
            Insumo,
            Telefono,
            Ciudad,
            Email
        });

        res.json(createSupplier);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateSupplier = async (req, res) => { 
    const { id } = req.params;
    try {
        const updateSupplier = await supplier.findOne({
            where: {
                ID_PROVEEDOR: id
            }
        });

        updateSupplier.set(req.body);
        await updateSupplier.save();
        return res.json(updateSupplier);           
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteSupplier = async (req, res) => {
    
    try {
        const { id } = req.params;
        
        await supplier.destroy({
            where: {
                ID_PROVEEDOR: id
            }
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

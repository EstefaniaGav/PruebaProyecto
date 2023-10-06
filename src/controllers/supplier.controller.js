import { supplier } from '../models/supplier.model.js';

export const checkForDuplicates = async (req, res, next) => {
  try {
    const { id } = req.params; 

    const existingSupplier = await supplier.findByPk(id);

    if (!existingSupplier) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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
    const oneSupplier = await supplier.findByPk(id);
    if (!oneSupplier) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(oneSupplier);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const { Cedula, Nombre, Telefono, Ciudad, Email } = req.body;

    const createSupplier = await supplier.create({
      Cedula,
      Nombre,
      Telefono,
      Ciudad,
      Email,
    });

    res.json(createSupplier);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSupplier = async (req, res) => {
  const { id } = req.params;

  try {
    const updateSupplier = await supplier.findByPk(id);

    if (!updateSupplier) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    const updateData = req.body;

    updateSupplier.set({ ...updateData });

    await updateSupplier.save();

    return res.json(updateSupplier);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSupplier = async (req, res) => {
  const { id } = req.params;

  try {
    const supplierToDelete = await supplier.findByPk(id);

    if (!supplierToDelete) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }

    await supplierToDelete.destroy();

    console.log('Proveedor eliminado correctamente'); // Agregar este log
    return res.json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el proveedor:', error); // Agregar este log
    return res.status(500).json({ message: error.message });
  }
};



export const toggleSupplierStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const supplierToToggle = await supplier.findByPk(id);

    // if (!supplierToToggle) {
    //   return res.status(404).json({ message: 'Proveedor no encontrado' });
    // }

    supplierToToggle.Estado = !supplierToToggle.Estado;

    await supplierToToggle.save();

    return res.json(supplierToToggle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

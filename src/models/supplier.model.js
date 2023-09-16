import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { shopping } from './shopping.model.js';
import { detail_shopping } from './detail_shopping.model.js';


export const supplier = sequelize.define('PROVEEDORES', {
    ID_PROVEEDOR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El nombre es requerido'
            },
            noSpecialCharacters(value) {
                const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
                if (specialCharacters.test(value)) {
                  throw new Error('Este campo no puede contener caracteres especiales');
                }
            },
            noNumbers(value) {
                if (/[0-9]/.test(value)) {
                    throw new Error('Este campo no puede contener números');
                } 
            }
        }
    },

    Telefono: {
        type: DataTypes.INTEGER,
        required: true
    },
    Email: {
        type: DataTypes.STRING,
        required: true
    },
    Ciudad: {
        type: DataTypes.STRING,
        required: true
    }
});

supplier.hasMany(shopping, {
    foreignKey: 'ID_PROVEEDOR',
    sourceKey: 'ID_PROVEEDOR'
})

shopping.belongsTo(supplier, {
    foreignKey: 'ID_PROVEEDOR',
    targetId: 'ID_PROVEEDOR'
})


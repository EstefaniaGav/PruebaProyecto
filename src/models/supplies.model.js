import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { detail_shopping } from './detail_shopping.model.js';

export const supplies = sequelize.define('INSUMOS', {
    ID_INSUMOS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Insumo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
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
    Cantidad_Insumo: {
        type: DataTypes.SMALLINT,
        // defaultValue: 0,
        required: true
    },
    Imagen: {
        type: DataTypes.BLOB,
        required: true
    },
    Stock_Minimo: {
        type: DataTypes.INTEGER,
        required: true
    }
});

supplies.hasMany(detail_shopping, {
    foreignKey: 'ID_INSUMOS',
    sourceKey: 'ID_INSUMOS'
})

detail_shopping.belongsTo(supplies, {
    foreignKey: 'ID_INSUMOS',
    targetId: 'ID_INSUMOS'
})



/* supplies.hasMany(recipe, {
    foreignKey: 'ID_INSUMOS',
    sourceKey: 'ID_INSUMOS'
})

recipe.belongsTo(supplies, {
    foreignKey: 'ID_INSUMOS',
    targetId: 'ID_INSUMOS'
}) */
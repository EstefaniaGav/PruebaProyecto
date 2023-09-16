import {DataTypes} from 'sequelize'
import {sequelize} from '../db/dataBase.js'

const Usuario = sequelize.define('USUARIO',{
    ID_USUARIO :{
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement : true
    },
    Nombre_Usuario: {
        type : DataTypes.STRING,
        required: true,
        trim: true
    },

    Contrasena:{
        type : DataTypes.STRING,
        required: true,
    },
    Email:{
        type : DataTypes.STRING,
        required: true,
        trim: true,
        unique: true
    },
   /*  ID_ROL:{
        type : DataTypes.INTEGER
        
    } */
}, {
    timestamps: true
}

)
 
export default Usuario;
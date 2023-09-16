import Usuario from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {createAccessToken} from "../libs/jwt.js"

export const register = async(req, res) => {
  const {Nombre_Usuario, Email, Contrasena} = req.body

  try{

    const passwordHash = await bcrypt.hash(Contrasena, 10)

    const newUser = new Usuario({
        Nombre_Usuario,
        Email,
        Contrasena: passwordHash
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ ID_USUARIO: userSaved.ID_USUARIO });
    res.cookie('token', token);
    
    res.json({
      id: userSaved.ID_USUARIO,
      usuario: userSaved.Nombre_Usuario,
      email: userSaved.Email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    });
 } catch(error){
    res.status(500).json({message: error.message});
 }
};


export const login = async (req, res) => {
  const {Email, Contrasena} = req.body
  try{

    const userFound = await Usuario.findOne({where: {Email}});
    if(!userFound) return res.status(400).json({message: "User not found"});

    const isMatch = await bcrypt.compare(Contrasena, userFound.Contrasena)

    if(!isMatch) return res.status(400).json({message: "Incorrect password"});

    const token = await createAccessToken({ID_USUARIO: userFound.ID_USUARIO});
    res.cookie('token', token);
    
    res.json({
      id: userFound.ID_USUARIO,
      usuario: userFound.Nombre_Usuario,
      email: userFound.Email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    });
 } catch(error){
    res.status(500).json({message: error.message});
 }
};

export const logout = (req, res) => {
  res.cookie('token', "",{
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const UserFound = await Usuario.findById(req.Usuario.id)
  
  if(!UserFound) return res.status(400).json({message: "User not found"});

  return res.json({
    id: UserFound.ID_USUARIO,
    usuario: UserFound.Nombre_Usuario,
    email: UserFound.Email,
    createdAt: UserFound.createdAt,
    updatedAt: UserFound.updatedAt
  });
}
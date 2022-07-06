import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    foto: String,
    rol: String,
    password: String,
    name: String,
    email: String,
},{
    timestamps: true
});

export interface IUser extends Document {
    foto: string;
    rol: string;
    password: string;
    name: string;
    email: string;
}

export default model<IUser>('User', schema);
/*
foto: String,
rol: String,
password: String,
name: String,
dni: String,
email: String, %dni-añoingreso(last_two)%
ingreso: String,
egreso: String,
matricula: String,
indiceacdemico: String,
dscp: String,
codigo: String,
nacimiento: String,
sexo: String,
celular: String,
ciclo: String,
carrera: String,
sisfoh: String,
*/


/*

//ingreso
nrecibo
fecha
remitente
descripcion
monto

//EGRESos
fecha
tipodocumento
nreciboemisor
nombre
cantidad
preciounitario
concepto
monto
*/

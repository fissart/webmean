"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    foto: String,
    rol: String,
    password: String,
    name: String,
    email: String,
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('User', schema);
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

import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
//import Responce, { IResponce } from '../1.models/8_Responce';
import Average, { IAverage } from '../1.models/10_Average';
//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { nota, teacher, user, curse, title, ciclo, credito, especialidad } = req.body;
    const newDate = { nota, teacher, user, curse, title, ciclo, credito, especialidad};
    const data = new Average(newDate);
    await data.save();
    return res.json({ message: 'Ok create' });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const data = await Average.find({type: 'RESPONCE'});
    return res.json(data);
}
//getupdateController////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await Average.findById(id);
    return res.json(data);
}
//deleteController///////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const File = await Average.findByIdAndRemove(id) as IAverage;
    return res.json({ message: 'Ok remove' });
};

//updateController///////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {  nota } = req.body;
    const update = await Average.findByIdAndUpdate(id, { nota });
    return res.json({
        message: 'Successfully updated'
    });
}

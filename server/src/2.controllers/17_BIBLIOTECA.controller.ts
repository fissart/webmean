import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'
import Collection, { ICollection } from '../1.models/7_Collection';
import Book, { IBook } from '../1.models/9_Book';
//createController///////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { title, description, user } = req.body;
    //console.log(req.body);
    const newDate = { title, description, user, author:"Autor", subtype:"LIBRO",  type: 'BIBLIOTECA'};
    const data = new Book(newDate);
    await data.save();
    return res.json({ message: 'Ok create' });
};
//getsController/////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const data = await Book.find({type: 'BIBLIOTECA'});
    return res.json(data);
}
//getupdateController////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = await Book.findById(id);
    return res.json(data);
}
//deleteController///////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);

    const File = await Book.findByIdAndRemove(id) as IBook;
    if (File) {
        try {
            await fs.unlink(path.resolve(File.file));
        } catch (err) {
            console.error(err);
        }
    }
    return res.json({ message: 'Ok remove' });
};
//updateController///////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {  title, description, user, responce, author, subtype } = req.body;
    const update = '';
    if (req.file) {
        const File = await Book.findById(id) as IBook;
        if (File) {
            try {
                await fs.unlink(path.resolve(File.file));
            } catch (err) {
                console.error(err);
            }
        }
        const update = await Book.findByIdAndUpdate(id, { title, description, subtype, author, file: req.file.path });
    } else {
        const update = await Book.findByIdAndUpdate(id, { title, description, subtype, author });
    }
    return res.json({
        message: 'Successfully updated'
    });
}

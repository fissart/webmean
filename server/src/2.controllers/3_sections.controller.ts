import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Curse, { ISection } from '../1.models/3_Section';

//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
    const Curses = await Curse.find();
    return res.json(Curses);
};

//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const www = await Curse.findById(id);
    //    console.log(www)
    return res.json(www);
}

//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { title, description,  curse, test, task, user, time, timeex } = req.body;
    console.log("reqwwww");
    //    if (!req.file) return res.status(400).send("No files were uploaded!!");
    const newCurse = { title, description, curse, test, task, user, time,  timeex, img: "imagen" };
    const Cursew = new Curse(newCurse);
    await Cursew.save();
    return res.json({
        message: 'Saved Successfully',
    });
};

//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    const Curseuser = await Curse.aggregate([
        {
            $match: {
                _id: user,
            },
        },
        {
            $lookup: {
                from: "sections",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$curse", "$$www"] } } },
                    {
                        $lookup: {
                            from: "themes",
                            let: { www: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } }],
                            as: "temas",
                        },
                    },
                ],
                as: "unidades",
            },
        },
    ]);
    console.log(Curseuser);
    return res.json(Curseuser);
}

//deleteController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    //await Opinion.deleteMany({ imageid: id });
    const Curseww = await Curse.findByIdAndRemove(id) as ISection;
    //const Curse = await Curse.findByIdAndRemove(id) as ICurse;
    if (Curseww) {
        try {
            //fs.unlinkSync("files/tasks/" + file);
            await fs.unlink(path.resolve(Curseww.img));
        } catch (err) {
            console.error(err);
        }
    }
    return res.json({ message: 'Successfully deleted' });
};

//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(req.body)
    const { title, description, task,test,time,timeex } = req.body;
    const updatedCurse = "";
    if (req.file) {
        
        const Cursew = await Curse.findById(id) as ISection;
        if (Cursew) {
            try {
                await fs.unlink(path.resolve(Cursew.img));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, task,test,time,timeex, img: req.file.path });
    } else {
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, task,test,time,timeex });
    }
    return res.json({
        message: 'Successfully updated'
    });

}

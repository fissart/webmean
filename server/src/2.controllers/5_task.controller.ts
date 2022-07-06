import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Task, { ITask } from '../1.models/5_Task';
import Curse, { ICurse } from '../1.models/2_Curse';

//import Opinion, { IOpinion } from '../1.models/Opinion';

//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
   const { ObjectId } = require("mongodb");
    const user = ObjectId(req.params.user);
    const curse = ObjectId(req.params.curse);
    console.log(user, curse); 
    const Curses = await Curse.aggregate([
        {
            $match: {
                _id: curse,
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
                                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } },
                                {
                                $lookup: { 
                                    from: "tasks",
                                    let: { www: "$_id" },
                                    pipeline: [
                                       { $match: { $expr: { $and: [
                                                { $eq: ["$theme", "$$www"] },
                                                {
                                                  $eq: ["$user", user],
                                                },
                                              ] } } }
                                    ],
                                    as: "usertask",
                                    },
                                }
                            ],
                            as: "temas",
                        },
                    },
                ],
                as: "unidades",
            },
        },
    ]);
    return res.json(Curses);
};

//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const www = await Task.findById(id);
    console.log(id);
    return res.json(www);
}


//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const {task, theme, unidad, curse, user } = req.body;
    console.log(req.file);
//    const newCurse = '';
    if (req.file) {
        const newCurse = { note: "", archivo:req.file.path, task, theme, unidad, curse, user };
    const userw = new Task(newCurse);
    await userw.save();
    } else { 
    const newCurse = { note: "", task, theme, unidad, curse, user };
    const userw = new Task(newCurse);
    await userw.save();
    }    
          
    ///console.log(userw._id);
    
    //    if (!req.file) return res.status(400).send("No files were uploaded!!");
//    const newCurse = {archivo:req.file.path, task, theme, unidad, curse, user};
  //  const Cursew = new Curse(newCurse);
    //await Cursew.save();
      //  console.log(Cursew);
    return res.json({
        message: 'Saved theme',
    });
};

//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    //    const { id } = req.params;
    //    const Curseuser = await Curse.findById(id);
    const Curseuser = await Task.aggregate([
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
    const Curseww = await Task.findByIdAndRemove(req.params.id) as ITask;
    //const Curse = await Curse.findByIdAndRemove(id) as ITask;
    
    if (Curseww) {
        try {
            //fs.unlinkSync("files/tasks/" + file);
            await fs.unlink(path.resolve(Curseww.archivo));
        } catch (err) {
            console.error(err);
        }
    }
    
    return res.json({ message: 'Successfully deleted task' });
};

//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    console.log(req.file)
    const { id } = req.params;
    const { task, note } = req.body;
    const updatedCurse = "";
    if (req.file) {        
        const Cursew = await Task.findById(id) as ITask;
        if (Cursew) {
            try {
                await fs.unlink(path.resolve(Cursew.archivo));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Task.findByIdAndUpdate(id, {note, task, archivo: req.file.path });
    } else {
        const updatedCurse = await Task.findByIdAndUpdate(id, {note, task });
    }   
    return res.json({
        message: 'Successfully updated',
        //updatedCurse
    });
}

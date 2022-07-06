import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Curse, { ITheme } from '../1.models/4_Theme';


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
    //console.log(www);
    return res.json(www);
}


//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {
    const { title, description, user, task, curse, unidad, time } = req.body;
    console.log(req.body);
    //    if (!req.file) return res.status(400).send("No files were uploaded!!");
    const newCurse = { title, description, task, unidad, curse, user, time, img:"" };
    const Cursew = new Curse(newCurse);
    await Cursew.save();
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
    //const { ObjectId } = require("mongodb");
    //const id = ObjectId(req.params.id);
    //await Opinion.deleteMany({ imageid: id });
    const Curseww = await Curse.findByIdAndRemove(req.params.id) as ITheme;
    //const Curse = await Curse.findByIdAndRemove(id) as ICurse;
    /*
    if (Curseww) {
        try {
            //fs.unlinkSync("files/tasks/" + file);
            await fs.unlink(path.resolve(Curseww.img));
        } catch (err) {
            console.error(err);
        }
    }
    */
    return res.json({ message: 'Successfully deleted theme' });
};

//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    //console.log(req);
    const { title, description,task, time } = req.body;
    if (req.file) {
        const Cursew = await Curse.findById(id) as ITheme;
        if (Cursew) {
            try {
                await fs.unlink(path.resolve(Cursew.img));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description,task, time, img: req.file.path  });
        //const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, img: req.file.path });
    } else {
        //const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description });
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description,task, time });
    }

    return res.json({
        message: 'Successfully updated theme',
    });
}


/*
//createCurse2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createCurse2(req: Request, res: Response): Promise<Response> {
    const { title, description, user, curse } = req.body;
    console.log(req);
    const newCurse = { title, description, user, curse, imagePath: req.file.path };
    const Curse = new Curse(newCurse);
    await Curse.save();

    return res.json({
        message: 'Curse Saved Successfully',
    });
};

//updateCurse2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateCurse2(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(id)
    const { title, description } = req.body;
    const updatedCurse = "";
    if (req.file) {
        const Curse = await Curse.findById(id) as ICurse;
        if (Curse) {
            try {
                await fs.unlink(path.resolve(Curse.imagePath));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description, imagePath: req.file.path });
    } else {
        const updatedCurse = await Curse.findByIdAndUpdate(id, { title, description });
    }
    return res.json({
        message: 'Successfully updated',
        updatedCurse
    });

}
//createOpinion/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createOpinion(req: Request, res: Response): Promise<Response> {
    const { user, imageid, value } = req.body;
    await Opinion.deleteMany({ user, imageid });
    const opinar = { user, imageid, value };
    const opi = new Opinion(opinar);
    await opi.save();
    return res.json({
        message: 'Opinion Saved Successfully',
        opi
    });
};

//delete_Opinion/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function delete_Opinion(req: Request, res: Response): Promise<Response> {
    const { user, imageid } = req.body;
    console.log(user, imageid)
    await Opinion.deleteMany({ user, imageid });
    return res.json({ message: 'Curse Deleted' });
};
*/

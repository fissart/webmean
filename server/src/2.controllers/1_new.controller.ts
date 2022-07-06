import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import News, { INews } from '../1.models/1_New';
import Tasks, { ITask } from '../1.models/5_Task';
import Integer, { IInteger } from '../1.models/6_Integer';

//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsController(req: Request, res: Response): Promise<Response> {
//    const { ObjectId } = require("mongodb");
//    const id = ObjectId(req.params.id);
//    const user = ObjectId(id);
    const Curses = await News.aggregate([
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } }
                ],
                as: "user",
            },

        },{
            $lookup: {
                from: "integers",
                let: { curse: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$curse", "$$curse"] } } }
                ],
                as: "integer",
            },

        },
    ]);

    //const Curses = await Curse.find();
    return res.json(Curses);
};


//getsControllerUser/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getsControllerUser(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const curso = ObjectId(id);
    const Curses = await News.aggregate([
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } }
                ],
                as: "user",
            },

        },{
            $lookup: {
                from: "integers",
                let: { curse: "$_id" },
                pipeline: [
                    { $match: { $expr: {$and: [
                        { $eq: ["$curse", "$$curse"] },
                        {
                          $eq: ["$user", curso ],
                        },
                      ],} } }
                ],
                as: "integer",
            },

        },
        {
            $lookup: {
                from: "integers",
                let: { curse: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$curse", "$$curse"] } } }
                ],
                as: "integers",
            },

        },
    ]);
    //console.log(Curses)
    //const Curses = await Curse.find();
    return res.json(Curses);
};

//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getupdateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const www = await News.findById(id);
    //    console.log(www)
    return res.json(www);
}


//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function   createController(req: Request, res: Response): Promise<Response> {
    const { title, description, user, show} = req.body;
    //    if (!req.file) return res.status(400).send("No files were uploaded!!");
    const newCurse = { title, description, user, show, img: "imagen" };
    const Cursew = new News(newCurse);
    await Cursew.save();
    return res.json({
        message: 'Saved Successfully',
    });
};

//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const curse = ObjectId(req.params.id);
    const user = ObjectId(req.params.idw);
    console.log(curse,user)
    const Curseuser = await News.aggregate([
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
    // console.log(Curseuser);
    return res.json(Curseuser);
}

//deleteController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const Curseww = await News.findByIdAndRemove(id) as INews;
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
    console.log(req);

    const { title, description, show} = req.body;
    const updatedCurse = "";
    if (req.file) {
        const Cursew = await News.findById(id) as INews;
        if (Cursew) {
            try {
                await fs.unlink(path.resolve(Cursew.img));
            } catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await News.findByIdAndUpdate(id, { title, description, show, img: req.file.path });
    } else {
        const updatedCurse = await News.findByIdAndUpdate(id, {  title, description, show });
    }
    return res.json({
        message: 'Successfully updated',
        //updatedCurse
    });

}
//update2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController_show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(req.file);

    const { show} = req.body;
        const updatedCurse = await News.findByIdAndUpdate(id, { show });

    return res.json({
        message: 'Successfully updated',

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

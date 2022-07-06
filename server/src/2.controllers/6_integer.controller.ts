import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Curse, { IInteger } from '../1.models/6_Integer';
import Curso, { ICurse } from '../1.models/2_Curse';
import User, { IUser } from '../1.models/1_User';

//import Opinion, { IOpinion } from '../1.models/Opinion';

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
    console.log(id);
    return res.json(www);
}


//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function createController(req: Request, res: Response): Promise<Response> {

    var mongoose = require('mongoose');
    const { curse, user, userteach } = req.body;

    if(mongoose.Types.ObjectId.isValid(curse)){

    const { ObjectId } = require("mongodb");
    const id_curse = ObjectId(curse);
    const id_user = ObjectId(user);
    const www = await Curso.findById(curse);
    const wwwww = await User.findById(user);
    //console.log(www, wwwww);
    //const integer = await Curse.find({curse:id_curse,user:id_user});
        if(wwwww && www){
            const integer = await Curse.find({curse:id_curse,user:id_user});
            //console.log(integer)
            if(integer.length == 0){
            const userteachwww=www.user;
            const newCurse = { curse, user, userteach :userteachwww };
            const Cursew = new Curse(newCurse);
            await Cursew.save();
               }else{
                 return res.json({
                msg: 'Ya se registró en el curso',
            });
               }
        }else{
            return res.json({
                msg: 'No existe curso o usuario, reinicie sesión',
            });
             }
    }else{
        return res.json({
            msg: 'Código incorrecto',
        });
    }
        return res.json({
        msgok: "ok",
    });
};

//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getController(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const curso = ObjectId(id);
    //    const { id } = req.params;
//          const Curseuser = await Curse.find({curse:curso});
    const integers = await Curse.aggregate([
        {
            $match: {
                curse: curso,
            },
        },
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                    {
                        $lookup: {
                            from: "tasks",
                            let: { www: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$user", "$$www"] } } },
                                { $match: { $expr: {$and: [
                                    { $eq: ["$user", "$$www"] },
                                    {
                                      $eq: ["$curse", curso ],
                                    },
                                  ],} } }

                            ],
                            as: "tasks",
                        },
                    },
                ],
                as: "userw",
            },
        },
        {
            $lookup: {
                from: "curses",
                let: { wwwww: "$curse",  www_: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$wwwww"] } } },
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
                                                               $eq: ["$user", "$$www_"],
                                                             },
                                                           ] } } }
                                          ],
                                                    as: "task",
                                                },
                                            },

                                        ],
                                        as: "themes",
                                    },
                                },
                            ],
                            as: "units",
                        },
                    },
                ],
                as: "cursse",
            },
        },
    ]);
    console.log(integers);
    return res.json(integers);
}


//getControlleruserinteger/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function getControlleruser(req: Request, res: Response): Promise<Response> {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    //    const { id } = req.params;
//          const Curseuser = await Curse.find({curse:curso});
    const integers = await Curse.aggregate([
        {
            $match: {
                user: user,
            },
        },
        {
            $lookup: {
                from: "users",
                let: { www: "$user" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$www"] } } },
                ],
                as: "userw",
            },
        },
        {
            $lookup: {
                from: "curses",
                let: { ww: "$curse" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$_id", "$$ww"] } } },
                ],
                as: "curse",
            },
        },
    ]);
    console.log(integers);
    return res.json(integers);
}



//deleteController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function deleteController(req: Request, res: Response): Promise<Response> {
    const Curseww = await Curse.findByIdAndRemove(req.params.id) as IInteger;
    return res.json({ message: 'Successfully deleted task' });
};

//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
export async function updateController(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { task } = req.body;
    const updatedCurse = await Curse.findByIdAndUpdate(id, { task });
    return res.json({
        message: 'Successfully updated',
        //updatedCurse
    });
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = exports.deleteController = exports.getController = exports.createController = exports.getupdateController = exports.getsController = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
// Models
const _3_Section_1 = __importDefault(require("../1.models/3_Section"));
//getsController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getsController(req, res) {
    const Curses = await _3_Section_1.default.find();
    return res.json(Curses);
}
exports.getsController = getsController;
;
//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getupdateController(req, res) {
    const { id } = req.params;
    const www = await _3_Section_1.default.findById(id);
    //    console.log(www)
    return res.json(www);
}
exports.getupdateController = getupdateController;
//createController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function createController(req, res) {
    const { title, description, curse, test, task, user, time, timeex } = req.body;
    console.log("reqwwww");
    //    if (!req.file) return res.status(400).send("No files were uploaded!!");
    const newCurse = { title, description, curse, test, task, user, time, timeex, img: "imagen" };
    const Cursew = new _3_Section_1.default(newCurse);
    await Cursew.save();
    return res.json({
        message: 'Saved Successfully',
    });
}
exports.createController = createController;
;
//getController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    const Curseuser = await _3_Section_1.default.aggregate([
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
                                { $match: { $expr: { $eq: ["$unidad", "$$www"] } } }
                            ],
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
exports.getController = getController;
//deleteController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function deleteController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    //await Opinion.deleteMany({ imageid: id });
    const Curseww = await _3_Section_1.default.findByIdAndRemove(id);
    //const Curse = await Curse.findByIdAndRemove(id) as ICurse;
    if (Curseww) {
        try {
            //fs.unlinkSync("files/tasks/" + file);
            await fs_extra_1.default.unlink(path_1.default.resolve(Curseww.img));
        }
        catch (err) {
            console.error(err);
        }
    }
    return res.json({ message: 'Successfully deleted' });
}
exports.deleteController = deleteController;
;
//updateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function updateController(req, res) {
    const { id } = req.params;
    console.log(req.body);
    const { title, description, task, test, time, timeex } = req.body;
    const updatedCurse = "";
    if (req.file) {
        const Cursew = await _3_Section_1.default.findById(id);
        if (Cursew) {
            try {
                await fs_extra_1.default.unlink(path_1.default.resolve(Cursew.img));
            }
            catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await _3_Section_1.default.findByIdAndUpdate(id, { title, description, task, test, time, timeex, img: req.file.path });
    }
    else {
        const updatedCurse = await _3_Section_1.default.findByIdAndUpdate(id, { title, description, task, test, time, timeex });
    }
    return res.json({
        message: 'Successfully updated'
    });
}
exports.updateController = updateController;

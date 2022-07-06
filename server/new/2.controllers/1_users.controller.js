"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.updateController = exports.deleteController = exports.getupdateController = exports.createController = exports.getController = exports.getSController = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
// Models
const _1_User_1 = __importDefault(require("../1.models/1_User"));
//import Curse, { ICurse } from '../1.models/2_Curse';
const _6_Integer_1 = __importDefault(require("../1.models/6_Integer"));
const _5_Task_1 = __importDefault(require("../1.models/5_Task"));
//Usuarios unicamente sin anidaciones/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getSController(req, res) {
    const Curse = await _1_User_1.default.find({ rol: '3' });
    return res.json(Curse);
}
exports.getSController = getSController;
//Usuarios opiniones 1-2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const user = ObjectId(id);
    //console.log(user,"hola")
    const Curses = await _1_User_1.default.aggregate([
        {
            $lookup: {
                from: "curses",
                let: { ww: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$user", "$$ww"] } } },
                    {
                        $lookup: {
                            from: "opinions",
                            let: { wuserww: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $and: [{ $eq: ["$imageid", "$$wuserww"] }, { $eq: ["$user", user] },] } } },
                            ],
                            as: "value",
                        },
                    },
                    {
                        $lookup: {
                            from: "opinions",
                            let: { userw: "$_id" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$imageid", "$$userw"] } } },
                            ],
                            as: "valueuser",
                        },
                    },
                ],
                as: "curse",
            },
        },
        {
            $lookup: {
                from: "integers",
                let: { www: "$_id" },
                pipeline: [
                    { $match: { $expr: { $eq: ["$user", "$$www"] } } },
                    {
                        $lookup: {
                            from: "curses",
                            let: { wwwww: "$curse" },
                            pipeline: [
                                { $match: { $expr: { $eq: ["$_id", "$$wwwww"] } } },
                            ],
                            as: "curse",
                        },
                    }
                ],
                as: "integer",
            },
        }
    ]);
    return res.json(Curses);
}
exports.getController = getController;
;
//2/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function createController(req, res) {
    const { name, email, password } = req.body;
    //console.log(req);
    const foto = '';
    if (req.file) {
        const foto = req.file.path;
    }
    else {
        const foto = 'User';
    }
    const Curse = await _1_User_1.default.findOne({ email: email });
    //const user = await User.findOne({ email: re });
    if (Curse) //return res.status(401).send('The email doen\' exists');
        return res.json({
            user: { "msg": "El usuario ya esta registrado" }
        });
    const newCurse = { name, email, password, rol: "new_user", foto };
    const user = new _1_User_1.default(newCurse);
    await user.save();
    return res.json({
        user
    });
}
exports.createController = createController;
;
//getupdateController/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function getupdateController(req, res) {
    const { id } = req.params;
    const Curse = await _1_User_1.default.findById(id);
    return res.json(Curse);
}
exports.getupdateController = getupdateController;
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
async function deleteController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    //usuario -- cursos(tareas...) fotos-cursos
    const Userw = await _1_User_1.default.findByIdAndRemove(id);
    await _6_Integer_1.default.remove({ user: id });
    await _5_Task_1.default.remove({ user: id });
    if (Userw) {
        try {
            await fs_extra_1.default.unlink(path_1.default.resolve(Userw.foto));
            //await fs.unlink(path.resolve(Curse.img));
        }
        catch (err) {
            console.error(err);
        }
    }
    //    await Curse.delete({ user: id });
    return res.json({ message: 'Curse Deleted' });
}
exports.deleteController = deleteController;
;
//5/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function updateController(req, res) {
    const { id } = req.params;
    const { name, email, password, rol } = req.body;
    console.log(req.file);
    const updatedCurse = "";
    if (req.file) {
        const Curse = await _1_User_1.default.findById(id);
        if (Curse) {
            try {
                await fs_extra_1.default.unlink(path_1.default.resolve(Curse.foto));
            }
            catch (err) {
                console.error(err);
            }
        }
        const updatedCurse = await _1_User_1.default.findByIdAndUpdate(id, { name, email, password, foto: req.file.path });
    }
    else {
        const updatedCurse = await _1_User_1.default.findByIdAndUpdate(id, { name, email, password, rol });
    }
    return res.json({
        www: "actualizado correctamente"
    });
}
exports.updateController = updateController;
///////////////
/*
notesww.updateU = async (req, res) => {
//   console.log(req);
//    console.log(req.files);

  //const { title, content, duration, date, author } = req.body;
  //console.log(req.params.id);
  if (req.files) {
    const note = await Curse.findById(req.params.id);
    const file = note.foto;
    try {
      fs.unlinkSync("files/profile/" + file);
    } catch (err) {
      console.error(err);
    }
    const myFile = req.files.foto;
    myFile.mv(`files/profile/${req.params.id + "_" + myFile.name}`);
    const nEw = {
      foto: req.params.id + "_" + myFile.name,
      category: req.body.category,
      nombre: req.body.nombre,
      contenido: req.body.contenido,
      tarea: req.body.tarea,
      test: req.body.test,
      fechaexamen: req.body.fechaexamen,
      fechatarea: req.body.fechatarea,
      timexa: req.body.timexa,
    };
    console.log(nEw);
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  } else {
    const nEw = {
      category: req.body.category,
      nombre: req.body.nombre,
      contenido: req.body.contenido,
      tarea: req.body.tarea,
      test: req.body.test,
      fechaexamen: req.body.fechaexamen,
      fechatarea: req.body.fechatarea,
      timexa: req.body.timexa,
    };
    await Curse.findByIdAndUpdate(req.params.id, nEw);
  }
res.json("Note Updated");
};
*/
//6/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
async function signin(req, res) {
    const { re, uu } = req.params;
    //console.log(req.params)
    const user = await _1_User_1.default.findOne({ email: re });
    if (!user) //return res.status(401).send('The email doen\' exists');
        return res.json({
            user: { "msg": "El usuario no esta registrado" }
        });
    if (user.password !== uu) // return res.status(401).send('Wrong Password');
        return res.json({
            user: { "msg": "Password incorrecto" }
        });
    return res.json({
        user
    });
}
exports.signin = signin;
;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = exports.deleteController = exports.getupdateController = exports.getsController = exports.createController = void 0;
const _8_Responce_1 = __importDefault(require("../1.models/8_Responce"));
//createController///////////////////////////////////////////////////////////////////////
async function createController(req, res) {
    const { idresponce, responce, user } = req.body;
    //console.log(req.body);
    const newDate = { user, responce, idresponce, type: 'RESPONCE' };
    const data = new _8_Responce_1.default(newDate);
    await data.save();
    return res.json({ message: 'Ok create' });
}
exports.createController = createController;
;
//getsController/////////////////////////////////////////////////////////////////////////
async function getsController(req, res) {
    const data = await _8_Responce_1.default.find({ type: 'RESPONCE' });
    return res.json(data);
}
exports.getsController = getsController;
//getupdateController////////////////////////////////////////////////////////////////////
async function getupdateController(req, res) {
    const { id } = req.params;
    const data = await _8_Responce_1.default.findById(id);
    return res.json(data);
}
exports.getupdateController = getupdateController;
//deleteController///////////////////////////////////////////////////////////////////////
async function deleteController(req, res) {
    const { ObjectId } = require("mongodb");
    const id = ObjectId(req.params.id);
    const File = await _8_Responce_1.default.findByIdAndRemove(id);
    return res.json({ message: 'Ok remove' });
}
exports.deleteController = deleteController;
;
//updateController///////////////////////////////////////////////////////////////////////
async function updateController(req, res) {
    const { id } = req.params;
    const { responce } = req.body;
    const update = await _8_Responce_1.default.findByIdAndUpdate(id, { responce });
    return res.json({
        message: 'Successfully updated'
    });
}
exports.updateController = updateController;

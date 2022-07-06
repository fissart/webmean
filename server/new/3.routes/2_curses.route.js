"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const img_curse_1 = __importDefault(require("../libs/img_curse"));
const _2_curses_controller_1 = require("../2.controllers/2_curses.controller");
router.route('/Controller')
    .post(img_curse_1.default.single('image'), _2_curses_controller_1.createController)
    .get(_2_curses_controller_1.getsController);
router.route('/Controller/:id')
    .get(_2_curses_controller_1.getupdateController)
    .delete(_2_curses_controller_1.deleteController)
    .put(img_curse_1.default.single('image'), _2_curses_controller_1.updateController);
router.route('/getsControllerUser/:id')
    .get(_2_curses_controller_1.getsControllerUser);
//Inicio
router.route('/ControllerAll/:id/:idw')
    .get(_2_curses_controller_1.getController);
/*
// crear temas
router.route('/Controllers2')
.post(upload.single('image'), createController2);

// actualizar temas
router.route('/Controllers2/:id')
.put(upload.single('image'), updateController2);

// routes
router.route('/Controllers/opinion')
.post(createOpinion)
// routes
router.route('/Controllers/opinion/errase')
.post(delete_Opinion)
*/
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const files_task_1 = __importDefault(require("../libs/files_task"));
const _6_integer_controller_1 = require("../2.controllers/6_integer.controller");
router.route('/Controller')
    .post(files_task_1.default.single('image'), _6_integer_controller_1.createController);
router.route('/Controller/:id')
    .get(_6_integer_controller_1.getupdateController)
    .delete(_6_integer_controller_1.deleteController)
    .put(files_task_1.default.single('image'), _6_integer_controller_1.updateController);
router.route('/Controllerintegerscurse/:id')
    .get(_6_integer_controller_1.getController);
router.route('/Controllerintegeruser/:id')
    .get(_6_integer_controller_1.getControlleruser);
router.route('/ControllerAll/:id')
    .get(_6_integer_controller_1.getController);
exports.default = router;

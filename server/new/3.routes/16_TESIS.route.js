"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const img_investigacion_1 = __importDefault(require("../libs/img_investigacion"));
const _16_TESIS_controller_1 = require("../2.controllers/16_TESIS.controller");
//C
router.route('/')
    .post(img_investigacion_1.default.single('image'), _16_TESIS_controller_1.createController)
    .get(_16_TESIS_controller_1.getsController);
//RUD
router.route('/:id')
    .delete(_16_TESIS_controller_1.deleteController)
    .get(_16_TESIS_controller_1.getupdateController)
    .put(img_investigacion_1.default.single('image'), _16_TESIS_controller_1.updateController);
exports.default = router;

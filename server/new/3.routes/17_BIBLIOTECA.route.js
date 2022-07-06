"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const img_book_1 = __importDefault(require("../libs/img_book"));
const _17_BIBLIOTECA_controller_1 = require("../2.controllers/17_BIBLIOTECA.controller");
//C
router.route('/')
    .post(img_book_1.default.single('image'), _17_BIBLIOTECA_controller_1.createController)
    .get(_17_BIBLIOTECA_controller_1.getsController);
//RUD
router.route('/:id')
    .delete(_17_BIBLIOTECA_controller_1.deleteController)
    .get(_17_BIBLIOTECA_controller_1.getupdateController)
    .put(img_book_1.default.single('image'), _17_BIBLIOTECA_controller_1.updateController);
exports.default = router;

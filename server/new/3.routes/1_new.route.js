"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const img_new_1 = __importDefault(require("../libs/img_new"));
const _1_new_controller_1 = require("../2.controllers/1_new.controller");
router.route('/Controller')
    .post(img_new_1.default.single('image'), _1_new_controller_1.createController);
router.route('/Controller/:id')
    .get(_1_new_controller_1.getupdateController)
    .delete(_1_new_controller_1.deleteController)
    .put(img_new_1.default.single('image'), _1_new_controller_1.updateController);
router.route('/Controller_show/:id')
    .put(_1_new_controller_1.updateController_show);
router.route('/ControllerAll')
    .get(_1_new_controller_1.getsController);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const img_curse_1 = __importDefault(require("../libs/img_curse"));
const _4_themes_controller_1 = require("../2.controllers/4_themes.controller");
router.route('/Controller')
    .post(img_curse_1.default.single('image'), _4_themes_controller_1.createController);
router.route('/Controller/:id')
    .get(_4_themes_controller_1.getupdateController)
    .delete(_4_themes_controller_1.deleteController)
    .put(img_curse_1.default.single('image'), _4_themes_controller_1.updateController);
router.route('/ControllerAll/:id')
    .get(_4_themes_controller_1.getController);
exports.default = router;

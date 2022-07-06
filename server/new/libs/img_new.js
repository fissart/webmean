"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const v4_1 = __importDefault(require("uuid/v4"));
// Settings
const storage = multer_1.default.diskStorage({
    destination: 'uploads/new',
    filename: (req, file, cb) => {
        cb(null, (0, v4_1.default)() + path_1.default.extname(file.originalname));
    }
});
exports.default = (0, multer_1.default)({ storage });

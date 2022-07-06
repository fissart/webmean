"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    task: String,
    img: String,
    time: Date,
    unidad: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    curse: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    }
});
exports.default = (0, mongoose_1.model)('Theme', schema);

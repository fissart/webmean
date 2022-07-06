"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    type: String,
    description: String,
    file: String,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    responce: String,
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Collection', schema);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    responce: String,
    idresponce: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Responce', schema);

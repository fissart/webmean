"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    archivo: String,
    task: String,
    note: String,
    theme: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
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
exports.default = (0, mongoose_1.model)('Task', schema);

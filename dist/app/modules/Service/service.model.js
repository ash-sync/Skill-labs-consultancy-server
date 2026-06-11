"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
exports.Service = (0, mongoose_1.model)("Service", serviceSchema);
//# sourceMappingURL=service.model.js.map
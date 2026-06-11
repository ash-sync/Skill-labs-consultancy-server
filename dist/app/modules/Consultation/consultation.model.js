"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultation = void 0;
const mongoose_1 = require("mongoose");
const consultationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    specialties: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Consultation = (0, mongoose_1.model)('Consultation', consultationSchema);
//# sourceMappingURL=consultation.model.js.map
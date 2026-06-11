"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expert = void 0;
const mongoose_1 = require("mongoose");
const expertSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Meet Our Experts', 'Our Global Consultants'],
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Expert = (0, mongoose_1.model)('Expert', expertSchema);
//# sourceMappingURL=expert.model.js.map
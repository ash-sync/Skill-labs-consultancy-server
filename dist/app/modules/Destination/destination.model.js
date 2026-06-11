"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destination = void 0;
const mongoose_1 = require("mongoose");
const destinationSchema = new mongoose_1.Schema({
    country: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    processingTime: { type: String, required: true },
    livingCost: { type: String, required: true },
    topInstitutes: [
        {
            name: { type: String, required: true },
            estimatedFees: { type: String, required: true },
        },
    ],
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Destination = (0, mongoose_1.model)('Destination', destinationSchema);
//# sourceMappingURL=destination.model.js.map
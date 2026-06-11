"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const mongoose_1 = require("mongoose");
const countrySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String },
    institutes: [{ type: String }],
    fees: { type: String },
    deadline: { type: String },
    subtitle: { type: String },
    region: { type: String },
    description: { type: String },
    features: [{
            title: { type: String, required: true },
            subtitle: { type: String, required: true }
        }]
}, { timestamps: true });
exports.Country = (0, mongoose_1.model)("Country", countrySchema);
//# sourceMappingURL=country.model.js.map
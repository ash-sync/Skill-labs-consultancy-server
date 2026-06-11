"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationValidationRules = exports.updateDestinationValidationRules = exports.createDestinationValidationRules = void 0;
const zod_1 = require("zod");
const topInstituteSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        error: "Institute name must be a string",
    })
        .min(2, {
        message: "Institute name is too short",
    }),
    estimatedFees: zod_1.z
        .string({
        error: "Estimated fees must be a string",
    })
        .min(1, {
        message: "Estimated fees is required",
    }),
});
exports.createDestinationValidationRules = zod_1.z.object({
    country: zod_1.z
        .string({
        error: "Country must be a string",
    })
        .min(2, {
        message: "Country name is too short",
    }),
    description: zod_1.z
        .string({
        error: "Description must be a string",
    })
        .min(10, {
        message: "Description is too short",
    }),
    imageUrl: zod_1.z
        .string({
        error: "Image URL must be a string",
    })
        .optional(),
    processingTime: zod_1.z
        .string({
        error: "Processing time must be a string",
    })
        .min(2),
    livingCost: zod_1.z
        .string({
        error: "Living cost must be a string",
    })
        .min(2),
    topInstitutes: zod_1.z
        .array(topInstituteSchema)
        .optional(),
});
exports.updateDestinationValidationRules = zod_1.z.object({
    country: zod_1.z
        .string({
        error: "Country must be a string",
    })
        .optional(),
    description: zod_1.z
        .string({
        error: "Description must be a string",
    })
        .optional(),
    imageUrl: zod_1.z
        .string({
        error: "Image URL must be a string",
    })
        .optional(),
    processingTime: zod_1.z
        .string({
        error: "Processing time must be a string",
    })
        .optional(),
    livingCost: zod_1.z
        .string({
        error: "Living cost must be a string",
    })
        .optional(),
    topInstitutes: zod_1.z.preprocess(val => {
        if (typeof val === "string") {
            try {
                return JSON.parse(val);
            }
            catch (_a) {
                return [];
            }
        }
        return val;
    }, zod_1.z.array(topInstituteSchema)).optional(),
});
exports.DestinationValidationRules = {
    createDestinationValidationRules: exports.createDestinationValidationRules,
    updateDestinationValidationRules: exports.updateDestinationValidationRules,
};
//# sourceMappingURL=destination.validation.js.map
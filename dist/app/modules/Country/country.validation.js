"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryValidationRules = exports.updateCountryValidationRules = exports.createCountryValidationRules = void 0;
const zod_1 = require("zod");
exports.createCountryValidationRules = zod_1.z.object({
    name: zod_1.z
        .string({ error: "Country name must be a string" })
        .min(2, { message: "Country name is too short (min 2 characters)" })
        .max(100, { message: "Country name is too long (max 100 characters)" }),
    image: zod_1.z
        .string({ error: "Image must be a string (URL)" })
        .url({ message: "Image must be a valid URL" })
        .optional(),
    institutes: zod_1.z
        .array(zod_1.z
        .string({ error: "Institute name must be a string" })
        .min(2, { message: "Institute name is too short" })
        .max(100, { message: "Institute name is too long" }))
        .optional(),
    fees: zod_1.z
        .string({ error: "Fees must be a string" })
        .min(1, { message: "Fees cannot be empty" })
        .max(50, { message: "Fees is too long" })
        .optional(),
    deadline: zod_1.z
        .string({ error: "Deadline must be a string" })
        .min(3, { message: "Deadline is required" })
        .max(50, { message: "Deadline is too long" })
        .optional(),
    subtitle: zod_1.z.string().optional(),
    region: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    features: zod_1.z.array(zod_1.z.object({
        title: zod_1.z.string(),
        subtitle: zod_1.z.string()
    })).optional()
});
exports.updateCountryValidationRules = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ error: "Country name must be a string" })
            .min(2, { message: "Country name is too short" })
            .max(100, { message: "Country name is too long" })
            .optional(),
        image: zod_1.z
            .string({ error: "Image must be a string (URL)" })
            .url({ message: "Image must be a valid URL" })
            .optional(),
        institutes: zod_1.z
            .array(zod_1.z.string({ error: "Institute must be a string" }))
            .optional(),
        fees: zod_1.z
            .string({ error: "Fees must be a string" })
            .optional(),
        deadline: zod_1.z
            .string({ error: "Deadline must be a string" })
            .optional(),
        subtitle: zod_1.z.string().optional(),
        region: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        features: zod_1.z.array(zod_1.z.object({
            title: zod_1.z.string(),
            subtitle: zod_1.z.string()
        })).optional()
    }),
});
exports.CountryValidationRules = {
    createCountryValidationRules: exports.createCountryValidationRules,
    updateCountryValidationRules: exports.updateCountryValidationRules,
};
//# sourceMappingURL=country.validation.js.map
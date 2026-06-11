"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidationRules = void 0;
const zod_1 = __importDefault(require("zod"));
const createServiceZodSchema = zod_1.default.object({
    title: zod_1.default
        .string({ error: "Title must be string" })
        .min(2, { message: "Title is too short" })
        .max(50, { message: "Title is too long" }),
    category: zod_1.default
        .string({ error: "Category must be string" })
        .min(2, { message: "Category is too short" })
        .max(50, { message: "Category is too long" }),
    description: zod_1.default
        .string({ error: "Description must be string" })
        .min(2, { message: "Description is too short" })
        .max(50, { message: "Description is too long" }),
});
exports.ServiceValidationRules = {
    createServiceZodSchema,
};
//# sourceMappingURL=service.validation.js.map
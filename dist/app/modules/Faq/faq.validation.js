"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqValidationRules = void 0;
const zod_1 = __importDefault(require("zod"));
const createFaqValidationSchema = zod_1.default.object({
    question: zod_1.default.string().min(1, "Question is required"),
    answer: zod_1.default.string().min(1, "Answer is required"),
});
const updateFaqValidationSchema = zod_1.default.object({
    question: zod_1.default.string().optional(),
    answer: zod_1.default.string().optional(),
    order: zod_1.default.number().optional(),
});
exports.FaqValidationRules = {
    createFaqValidationSchema,
    updateFaqValidationSchema,
};
//# sourceMappingURL=faq.validation.js.map
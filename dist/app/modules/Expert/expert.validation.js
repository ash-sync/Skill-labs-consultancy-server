"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertValidations = void 0;
const zod_1 = require("zod");
const createExpertValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ message: 'Name is required' }),
    role: zod_1.z.string({ message: 'Role is required' }),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string({ message: 'Description is required' }),
    category: zod_1.z.enum(['Meet Our Experts', 'Our Global Consultants'], { message: 'Category is required' }),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
const updateExpertValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    role: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    category: zod_1.z.enum(['Meet Our Experts', 'Our Global Consultants']).optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.ExpertValidations = {
    createExpertValidationSchema,
    updateExpertValidationSchema,
};
//# sourceMappingURL=expert.validation.js.map
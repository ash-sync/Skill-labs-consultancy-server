"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialValidations = void 0;
const zod_1 = require("zod");
const createTestimonialValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    role: zod_1.z.string().min(1, 'Role is required'),
    text: zod_1.z.string().min(10, 'Review text must be at least 10 characters'),
    rating: zod_1.z.number().min(1).max(5),
});
const updateTestimonialStatusValidationSchema = zod_1.z.object({
    status: zod_1.z.enum(['pending', 'approved', 'rejected']),
});
exports.TestimonialValidations = {
    createTestimonialValidationSchema,
    updateTestimonialStatusValidationSchema
};
//# sourceMappingURL=testimonial.validation.js.map
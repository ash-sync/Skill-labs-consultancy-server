"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationValidations = void 0;
const zod_1 = require("zod");
const createConsultationValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().min(1, 'Phone number is required'),
    serviceType: zod_1.z.string().min(1, 'Service type is required'),
    time: zod_1.z.string().min(1, 'Time is required'),
});
exports.ConsultationValidations = {
    createConsultationValidationSchema,
};
//# sourceMappingURL=consultation.validaion.js.map
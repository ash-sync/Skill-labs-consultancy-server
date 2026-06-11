"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidationRules = exports.updateBookingValidationRules = exports.createBookingValidationRules = void 0;
const zod_1 = require("zod");
exports.createBookingValidationRules = zod_1.z.object({
    name: zod_1.z
        .string({ error: "Name must be string" })
        .min(2, { message: "Name is too short. Minimum 2 characters required" })
        .max(50, { message: "Name is too long. Maximum 50 characters allowed" }),
    email: zod_1.z
        .string({ error: "Email must be string" })
        .email({ message: "Invalid email address format" })
        .min(5, { message: "Email must be at least 5 characters long" })
        .max(100, { message: "Email cannot exceed 100 characters" }),
    phone: zod_1.z
        .string({ error: "Phone must be string" })
        .min(10, { message: "Phone number is too short" })
        .max(15, { message: "Phone number is too long" }),
    service: zod_1.z
        .string({ error: "Service must be string" })
        .min(2, { message: "Service name is too short" })
        .max(100, { message: "Service name is too long" }),
    time: zod_1.z
        .string({ error: "Time must be string" })
        .min(3, { message: "Time is required" }),
    message: zod_1.z
        .string({ error: "Message must be string" })
        .max(500, { message: "Message cannot exceed 500 characters" })
        .optional(),
});
exports.updateBookingValidationRules = zod_1.z.object({
    status: zod_1.z
        .string({ error: "Status must be string" })
        .min(3, { message: "Status is too short" })
        .max(30, { message: "Status is too long" }),
});
exports.BookingValidationRules = {
    createBookingValidationRules: exports.createBookingValidationRules,
    updateBookingValidationRules: exports.updateBookingValidationRules,
};
//# sourceMappingURL=booking.validation.js.map
import { z } from "zod";
export declare const createBookingValidationRules: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    service: z.ZodString;
    time: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateBookingValidationRules: z.ZodObject<{
    status: z.ZodString;
}, z.core.$strip>;
export declare const BookingValidationRules: {
    createBookingValidationRules: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        service: z.ZodString;
        time: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    updateBookingValidationRules: z.ZodObject<{
        status: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=booking.validation.d.ts.map
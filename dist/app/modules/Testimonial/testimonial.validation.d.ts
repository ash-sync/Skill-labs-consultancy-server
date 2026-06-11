import { z } from 'zod';
export declare const TestimonialValidations: {
    createTestimonialValidationSchema: z.ZodObject<{
        name: z.ZodString;
        role: z.ZodString;
        text: z.ZodString;
        rating: z.ZodNumber;
    }, z.core.$strip>;
    updateTestimonialStatusValidationSchema: z.ZodObject<{
        status: z.ZodEnum<{
            pending: "pending";
            approved: "approved";
            rejected: "rejected";
        }>;
    }, z.core.$strip>;
};
//# sourceMappingURL=testimonial.validation.d.ts.map
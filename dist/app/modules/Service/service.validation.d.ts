import z from "zod";
export declare const ServiceValidationRules: {
    createServiceZodSchema: z.ZodObject<{
        title: z.ZodString;
        category: z.ZodString;
        description: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=service.validation.d.ts.map
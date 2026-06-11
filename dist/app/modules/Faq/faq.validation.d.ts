import z from "zod";
export declare const FaqValidationRules: {
    createFaqValidationSchema: z.ZodObject<{
        question: z.ZodString;
        answer: z.ZodString;
    }, z.core.$strip>;
    updateFaqValidationSchema: z.ZodObject<{
        question: z.ZodOptional<z.ZodString>;
        answer: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
};
//# sourceMappingURL=faq.validation.d.ts.map
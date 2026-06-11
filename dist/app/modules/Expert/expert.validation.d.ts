import { z } from 'zod';
export declare const ExpertValidations: {
    createExpertValidationSchema: z.ZodObject<{
        name: z.ZodString;
        role: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        category: z.ZodEnum<{
            "Meet Our Experts": "Meet Our Experts";
            "Our Global Consultants": "Our Global Consultants";
        }>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    updateExpertValidationSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodEnum<{
            "Meet Our Experts": "Meet Our Experts";
            "Our Global Consultants": "Our Global Consultants";
        }>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
};
//# sourceMappingURL=expert.validation.d.ts.map
import { z } from "zod";
export declare const createDestinationValidationRules: z.ZodObject<{
    country: z.ZodString;
    description: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodString>;
    processingTime: z.ZodString;
    livingCost: z.ZodString;
    topInstitutes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        estimatedFees: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const updateDestinationValidationRules: z.ZodObject<{
    country: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    processingTime: z.ZodOptional<z.ZodString>;
    livingCost: z.ZodOptional<z.ZodString>;
    topInstitutes: z.ZodOptional<z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        estimatedFees: z.ZodString;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const DestinationValidationRules: {
    createDestinationValidationRules: z.ZodObject<{
        country: z.ZodString;
        description: z.ZodString;
        imageUrl: z.ZodOptional<z.ZodString>;
        processingTime: z.ZodString;
        livingCost: z.ZodString;
        topInstitutes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            estimatedFees: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    updateDestinationValidationRules: z.ZodObject<{
        country: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        processingTime: z.ZodOptional<z.ZodString>;
        livingCost: z.ZodOptional<z.ZodString>;
        topInstitutes: z.ZodOptional<z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            estimatedFees: z.ZodString;
        }, z.core.$strip>>>>;
    }, z.core.$strip>;
};
//# sourceMappingURL=destination.validation.d.ts.map
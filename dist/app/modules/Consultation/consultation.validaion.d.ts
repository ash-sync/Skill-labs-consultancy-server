import { z } from 'zod';
export declare const ConsultationValidations: {
    createConsultationValidationSchema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodString;
        serviceType: z.ZodString;
        time: z.ZodString;
    }, z.core.$strip>;
};
//# sourceMappingURL=consultation.validaion.d.ts.map
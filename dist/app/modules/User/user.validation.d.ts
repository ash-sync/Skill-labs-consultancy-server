import { z } from "zod";
export declare const createUserZodSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=user.validation.d.ts.map
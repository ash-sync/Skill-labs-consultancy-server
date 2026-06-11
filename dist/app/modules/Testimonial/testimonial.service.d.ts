import { ITestimonial } from "./testimonial.interface";
export declare const TestimonialService: {
    createTestimonial: (payload: ITestimonial) => Promise<import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getApprovedTestimonials: () => Promise<(import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getAllTestimonials: () => Promise<(import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateTestimonialStatus: (id: string, payload: Partial<ITestimonial>) => Promise<(import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteTestimonial: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=testimonial.service.d.ts.map
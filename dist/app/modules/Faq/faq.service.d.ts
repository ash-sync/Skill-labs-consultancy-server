import { IFaq } from "./faq.interface";
export declare const FaqService: {
    createFaq: (payload: IFaq) => Promise<import("mongoose").Document<unknown, {}, IFaq, {}, import("mongoose").DefaultSchemaOptions> & IFaq & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllFaqs: () => Promise<(import("mongoose").Document<unknown, {}, IFaq, {}, import("mongoose").DefaultSchemaOptions> & IFaq & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateFaq: (id: string, payload: Partial<IFaq>) => Promise<(import("mongoose").Document<unknown, {}, IFaq, {}, import("mongoose").DefaultSchemaOptions> & IFaq & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteFaq: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IFaq, {}, import("mongoose").DefaultSchemaOptions> & IFaq & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=faq.service.d.ts.map
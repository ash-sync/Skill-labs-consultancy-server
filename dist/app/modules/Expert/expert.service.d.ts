import { IExpert } from './expert.interface';
export declare const ExpertServices: {
    createExpertIntoDB: (payload: IExpert) => Promise<import("mongoose").Document<unknown, {}, IExpert, {}, import("mongoose").DefaultSchemaOptions> & IExpert & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllExpertsFromDB: (query: Record<string, unknown>) => Promise<(import("mongoose").Document<unknown, {}, IExpert, {}, import("mongoose").DefaultSchemaOptions> & IExpert & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleExpertFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IExpert, {}, import("mongoose").DefaultSchemaOptions> & IExpert & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateExpertIntoDB: (id: string, payload: Partial<IExpert>) => Promise<(import("mongoose").Document<unknown, {}, IExpert, {}, import("mongoose").DefaultSchemaOptions> & IExpert & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteExpertFromDB: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IExpert, {}, import("mongoose").DefaultSchemaOptions> & IExpert & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=expert.service.d.ts.map
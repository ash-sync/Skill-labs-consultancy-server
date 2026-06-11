import { IService } from "./service.interface";
export declare const ServiceService: {
    createService: (payload: IService) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllServices: () => Promise<(import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getServiceById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateService: (id: string, payload: Partial<IService>) => Promise<(import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=service.service.d.ts.map
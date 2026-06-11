import { IDestination } from "./destination.interface";
export declare const DestinationService: {
    createDestination: (payload: IDestination) => Promise<import("mongoose").Document<unknown, {}, IDestination, {}, import("mongoose").DefaultSchemaOptions> & IDestination & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllDestinations: (query: any) => Promise<(import("mongoose").Document<unknown, {}, IDestination, {}, import("mongoose").DefaultSchemaOptions> & IDestination & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleDestination: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IDestination, {}, import("mongoose").DefaultSchemaOptions> & IDestination & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateDestination: (id: string, payload: Partial<IDestination>) => Promise<(import("mongoose").Document<unknown, {}, IDestination, {}, import("mongoose").DefaultSchemaOptions> & IDestination & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteDestination: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IDestination, {}, import("mongoose").DefaultSchemaOptions> & IDestination & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=destination.service.d.ts.map
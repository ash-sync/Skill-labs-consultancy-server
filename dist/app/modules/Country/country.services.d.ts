import { ICountry } from "./country.interface";
export declare const CountryService: {
    createCountry: (payload: ICountry) => Promise<import("mongoose").Document<unknown, {}, ICountry, {}, import("mongoose").DefaultSchemaOptions> & ICountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllCountries: (query: any) => Promise<(import("mongoose").Document<unknown, {}, ICountry, {}, import("mongoose").DefaultSchemaOptions> & ICountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getSingleCountry: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICountry, {}, import("mongoose").DefaultSchemaOptions> & ICountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateCountry: (id: string, payload: Partial<ICountry>) => Promise<(import("mongoose").Document<unknown, {}, ICountry, {}, import("mongoose").DefaultSchemaOptions> & ICountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteCountry: (id: string) => Promise<(import("mongoose").Document<unknown, {}, ICountry, {}, import("mongoose").DefaultSchemaOptions> & ICountry & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=country.services.d.ts.map
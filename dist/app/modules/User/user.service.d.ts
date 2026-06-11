export declare const UserService: {
    getAllUsers: () => Promise<(import("mongoose").Document<unknown, {}, import("./user.interface").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getUserById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./user.interface").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    makeAdmin: (id: string) => Promise<(import("mongoose").Document<unknown, {}, import("./user.interface").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.interface").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=user.service.d.ts.map
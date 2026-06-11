export declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export type IUser = {
    name: string;
    email: string;
    password: string;
    role: "USER" | "ADMIN";
    phone?: string;
};
//# sourceMappingURL=user.interface.d.ts.map
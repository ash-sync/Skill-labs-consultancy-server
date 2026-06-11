import { IBooking, IBooking2 } from "./booking.interface";
export declare const BookingService: {
    createBooking: (payload: Partial<IBooking>, userId: string) => Promise<import("mongoose").Document<unknown, {}, IBooking, {}, import("mongoose").DefaultSchemaOptions> & IBooking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllBookings: () => Promise<(import("mongoose").Document<unknown, {}, IBooking, {}, import("mongoose").DefaultSchemaOptions> & IBooking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateStatus: (bookingId: string, status: string) => Promise<(import("mongoose").Document<unknown, {}, IBooking, {}, import("mongoose").DefaultSchemaOptions> & IBooking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    removeBooking: (bookingId: string) => Promise<import("mongoose").Document<unknown, {}, IBooking, {}, import("mongoose").DefaultSchemaOptions> & IBooking & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    createBooking2: (payload: Partial<IBooking2>) => Promise<void>;
};
//# sourceMappingURL=booking.service.d.ts.map
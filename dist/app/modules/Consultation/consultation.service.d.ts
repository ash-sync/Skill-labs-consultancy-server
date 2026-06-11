import { IConsultationRequest } from './consultation.interface';
export declare const ConsultationServices: {
    createConsultation: (payload: IConsultationRequest) => Promise<import("mongoose").Document<unknown, {}, IConsultationRequest, {}, import("mongoose").DefaultSchemaOptions> & IConsultationRequest & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllConsultations: () => Promise<(import("mongoose").Document<unknown, {}, IConsultationRequest, {}, import("mongoose").DefaultSchemaOptions> & IConsultationRequest & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
};
//# sourceMappingURL=consultation.service.d.ts.map
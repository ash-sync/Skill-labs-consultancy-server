interface EmailParams {
    to: string;
    subject: string;
    html: string;
}
declare const sendEmail: ({ to, subject, html }: EmailParams) => Promise<void>;
export declare const sendEmail2: ({ to, subject, html }: EmailParams) => Promise<void>;
export default sendEmail;
//# sourceMappingURL=sendEmail.d.ts.map
import { AppError } from "../../errorHelpers/AppError";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import sendEmail from "../../utils/sendEmail";

const createBooking =async(payload:Partial<IBooking>,userId:string)=>{
    const bookingData: any = { ...payload };
    if (userId) {
        bookingData.user = userId;
    }
    const booking = await Booking.create(bookingData);

    try {

        await sendEmail({
            to: 'pronobroy3601@gmail.com',
            subject: 'New Booking Received',
            html: `
                <h3>New Booking Details:</h3>
                <p><strong>Name:</strong> ${payload.name}</p>
                <p><strong>Email:</strong> ${payload.email}</p>
                <p><strong>Service:</strong> ${payload.service}</p>
                <p><strong>Time:</strong> ${payload.time}</p>
                <p><strong>Message:</strong> ${payload.message || 'N/A'}</p>
            `
        });


        if (payload.email) {
            await sendEmail({
                to: payload.email,
                subject: 'Booking Confirmation - Skills-Lab Consultancy',
                html: `
                    <p>Dear ${payload.name},</p>
                    <p>Thank you for your booking. We have successfully received your request for <strong>${payload.service}</strong> at <strong>${payload.time}</strong>.</p>
                    <p>We will review it and get back to you shortly.</p>
                    <br/>
                    <p>Best Regards,</p>
                    <p>Skills-Lab Consultancy</p>
                `
            });
        }
    } catch (error) {
        console.error('Error sending booking emails:', error);
    }

    return booking;
}

const getAllBookings =async()=>{
    const bookings = await Booking.find({});

    if(!bookings.length){
        throw new AppError(404,"No booking found");
    }

    return bookings;
}

const updateStatus =async(bookingId:string,status:string)=>{
    const booking = await Booking.findById(bookingId);

    if(!booking){
        throw new AppError(404,"Booking not found");
    }
    return Booking.findByIdAndUpdate(bookingId,{ status },{ new:true });
}


const removeBooking =async(bookingId:string)=>{
    const booking = await Booking.findByIdAndDelete(bookingId);

    if(!booking){
        throw new AppError(404,"Booking not found");
    }

    return booking;
}

export const BookingService = {
    createBooking,
    getAllBookings,
    updateStatus,
    removeBooking
}
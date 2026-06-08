import { AppError } from "../../errorHelpers/AppError";
import { IBooking, IBooking2 } from "./booking.interface";
import { Booking } from "./booking.model";
import sendEmail from "../../utils/sendEmail";

const createBooking = async (
  payload: Partial<IBooking>,
  userId: string
) => {
  const bookingData: any = { ...payload };

  if (userId) {
    bookingData.user = userId;
  }

  const booking = await Booking.create(bookingData);

  const date = new Date(payload.time as string);

  const formattedDate = date.toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-BD", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  try {
    // Admin Email
    await sendEmail({
      to: "pronobroy3601@gmail.com",
      subject: "New Booking Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📌 New Booking Details</h2>

          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Phone:</strong> ${payload.phone}</p>
          <p><strong>Service:</strong> ${payload.service}</p>
          <p>
            <strong>Date:</strong> ${formattedDate}
            &nbsp; | &nbsp;
            <strong>Time:</strong> ${formattedTime}
          </p>
          <p><strong>Message:</strong> ${payload.message || "N/A"}</p>
        </div>
      `,
    });

    // User Confirmation Email
    if (payload.email) {
      await sendEmail({
        to: payload.email,
        subject: "Booking Confirmation - Skills-Lab Consultancy",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color:#2563eb;">Booking Confirmation</h2>

            <p>Dear ${payload.name},</p>

            <p>
              Thank you for choosing <strong>Skills-Lab Consultancy</strong>.
              Your booking request has been received successfully.
            </p>

            <div style="background:#f8fafc;padding:15px;border-radius:8px;margin:15px 0;">
              <p><strong>Service:</strong> ${payload.service}</p>
              <p><strong>Date:</strong> ${formattedDate}</p>
              <p><strong>Time:</strong> ${formattedTime}</p>
            </div>

            <p>
              Our team will review your request and contact you shortly.
            </p>

            <br/>

            <p>Best Regards,</p>
            <p><strong>Skills-Lab Consultancy</strong></p>
          </div>
        `,
      });
    }
  } catch (error) {
    console.error("Error sending booking emails:", error);
  }

  return booking;
};


const createBooking2 =async(payload:Partial<IBooking2>)=>{
      try {
    // Admin Email
    await sendEmail({
      to: "pronobroy3601@gmail.com",
      subject: "New Consultation Request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>🌍 New Consultation Request</h2>

          <p><strong>Name:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> ${payload.email}</p>
          <p><strong>Phone:</strong> ${payload.phone}</p>
          <p><strong>Interested Country:</strong> ${payload.interestedCountry}</p>
          <p><strong>Message:</strong> ${payload.message || "N/A"}</p>
        </div>
      `,
    });

    // User Confirmation Email
    if (payload.email) {
      await sendEmail({
        to: payload.email,
        subject: "Consultation Request Received - Skills-Lab Consultancy",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2 style="color:#2563eb;">
              Consultation Request Confirmation
            </h2>

            <p>Dear ${payload.name},</p>

            <p>
              Thank you for contacting
              <strong>Skills-Lab Consultancy</strong>.
            </p>

            <div style="background:#f8fafc;padding:15px;border-radius:8px;margin:15px 0;">
              <p>
                <strong>Interested Country:</strong>
                ${payload.interestedCountry}
              </p>
            </div>

            <p>
              Our team will review your request and get back to you shortly.
            </p>

            <br/>

            <p>Best Regards,</p>
            <p><strong>Skills-Lab Consultancy</strong></p>
          </div>
        `,
      });
    }
  } catch (error) {
    console.error("Error sending consultation emails:", error);
  }
};
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
    removeBooking,
    createBooking2
}
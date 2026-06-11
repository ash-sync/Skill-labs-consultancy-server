"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const AppError_1 = require("../../errorHelpers/AppError");
const booking_model_1 = require("./booking.model");
const sendEmail_1 = __importDefault(require("../../utils/sendEmail"));
const createBooking = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingData = Object.assign({}, payload);
    if (userId) {
        bookingData.user = userId;
    }
    const booking = yield booking_model_1.Booking.create(bookingData);
    const date = new Date(payload.time);
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
        yield (0, sendEmail_1.default)({
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
            yield (0, sendEmail_1.default)({
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
    }
    catch (error) {
        console.error("Error sending booking emails:", error);
    }
    return booking;
});
const createBooking2 = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Admin Email
        yield (0, sendEmail_1.default)({
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
            yield (0, sendEmail_1.default)({
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
    }
    catch (error) {
        console.error("Error sending consultation emails:", error);
    }
});
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield booking_model_1.Booking.find({});
    if (!bookings.length) {
        throw new AppError_1.AppError(404, "No booking found");
    }
    return bookings;
});
const updateStatus = (bookingId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_model_1.Booking.findById(bookingId);
    if (!booking) {
        throw new AppError_1.AppError(404, "Booking not found");
    }
    return booking_model_1.Booking.findByIdAndUpdate(bookingId, { status }, { new: true });
});
const removeBooking = (bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_model_1.Booking.findByIdAndDelete(bookingId);
    if (!booking) {
        throw new AppError_1.AppError(404, "Booking not found");
    }
    return booking;
});
exports.BookingService = {
    createBooking,
    getAllBookings,
    updateStatus,
    removeBooking,
    createBooking2
};
//# sourceMappingURL=booking.service.js.map
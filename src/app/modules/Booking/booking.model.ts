import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<IBooking>("Booking", BookingSchema);
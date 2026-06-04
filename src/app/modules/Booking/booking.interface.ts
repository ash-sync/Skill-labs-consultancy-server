import { Types } from "mongoose";

export interface IBooking {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  phone?: string;
  service: string;
  time: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
}


export interface IBooking2 {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  interestedCountry: string;
  phone: string;
  service: string;
  time: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
}
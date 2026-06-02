import { model, Schema } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
  isDeleted: { type: Boolean, default: false },
}, { timestamps: true });

export const Service = model<IService>("Service", serviceSchema);
import { model, Schema } from 'mongoose';
import { IExpert } from './expert.interface';

const expertSchema = new Schema<IExpert>(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Meet Our Experts', 'Our Global Consultants'],
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);



export const Expert = model<IExpert>('Expert', expertSchema);

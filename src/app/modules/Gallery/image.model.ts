import { model, Schema } from 'mongoose';
import { ICategory, IImage } from './image.interface';


const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Category = model<ICategory>('Category', categorySchema);

const imageSchema = new Schema<IImage>(
  {
    categoryId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Category', 
      required: true 
    },
    imageUrls: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const Image = model<IImage>('Image', imageSchema);
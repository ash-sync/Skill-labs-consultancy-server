import { ICategory, IImage } from "./image.interface";
import { Category, Image } from "./image.model";

const createCategory = async (payload: ICategory) => {
  return await Category.create(payload);
};

const getAllCategories = async () => {
  return await Category.find();
};

const uploadImages = async (payload: IImage) => {

  const isExist = await Image.findOne({ categoryId: payload.categoryId });
  
  if (isExist) {
    return await Image.findByIdAndUpdate(
      isExist._id,
      { $push: { imageUrls: { $each: payload.imageUrls } } },
      { new: true }
    );
  }
  
  return await Image.create(payload);
};

const getAllImages = async (query: any) => {
  const filter: any = {};
  if (query.categoryId) filter.categoryId = query.categoryId;
  return await Image.find(filter).populate('categoryId');
};


const deleteEntireCategory = async (categoryId: string) => {
  await Image.deleteMany({ categoryId });

  return await Category.findByIdAndDelete(categoryId);
};


const deleteSpecificImage = async (imageId: string, imageUrl: string) => {
  return await Image.findByIdAndUpdate(
    imageId,
    {
      $pull: { imageUrls: imageUrl } 
    },
    { new: true }
  );
};

export const ImageService = {
  createCategory,
  getAllCategories,
  uploadImages,
  getAllImages,
  deleteEntireCategory,
  deleteSpecificImage,
};
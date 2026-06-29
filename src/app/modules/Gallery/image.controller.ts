import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ImageService } from "./image.service";

const createCategory = catchAsync(async (req, res) => {
  const result = await ImageService.createCategory(req.body);
  sendResponse(res, { statusCode: 201, success: true, message: "Category created successfully", data: result });
});

const getAllCategories = catchAsync(async (req, res) => {
  const result = await ImageService.getAllCategories();
  sendResponse(res, { statusCode: 200, success: true, message: "Categories fetched successfully", data: result });
});

const uploadImages = catchAsync(async (req, res) => {
  const files = req.files as Express.Multer.File[];
  const body = { ...req.body };

  if (!files || files.length === 0) {
    return sendResponse(res, { statusCode: 400, success: false, message: "Please upload at least one image", data: null });
  }

  const imageUrls = files.map((file) => file.path);
  const payload = { ...body, imageUrls };

  const result = await ImageService.uploadImages(payload);
  sendResponse(res, { statusCode: 201, success: true, message: "Images uploaded successfully", data: result });
});

const getAllImages = catchAsync(async (req, res) => {
  const result = await ImageService.getAllImages(req.query);
  sendResponse(res, { statusCode: 200, success: true, message: "Images fetched successfully", data: result });
});

const deleteEntireCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;

  const result = await ImageService.deleteEntireCategory(categoryId as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category and its images deleted permanently",
    data: result,
  });
});


const deleteSpecificImage = catchAsync(async (req, res) => {
  const { imageId } = req.params; 
  const { imageUrl } = req.body;  

  if (!imageUrl) {
    return sendResponse(res, { statusCode: 400, success: false, message: "Image URL is required to delete", data: null });
  }

  const result = await ImageService.deleteSpecificImage(imageId as string, imageUrl);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Selected image deleted successfully",
    data: result,
  });
});

export const ImageController = {
  createCategory,
  getAllCategories,
  uploadImages,
  getAllImages,
  deleteEntireCategory,
  deleteSpecificImage,
};
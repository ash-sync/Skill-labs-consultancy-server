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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const image_service_1 = require("./image.service");
const createCategory = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_service_1.ImageService.createCategory(req.body);
    (0, sendResponse_1.sendResponse)(res, { statusCode: 201, success: true, message: "Category created successfully", data: result });
}));
const getAllCategories = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_service_1.ImageService.getAllCategories();
    (0, sendResponse_1.sendResponse)(res, { statusCode: 200, success: true, message: "Categories fetched successfully", data: result });
}));
const uploadImages = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = req.files;
    const body = Object.assign({}, req.body);
    if (!files || files.length === 0) {
        return (0, sendResponse_1.sendResponse)(res, { statusCode: 400, success: false, message: "Please upload at least one image", data: null });
    }
    const imageUrls = files.map((file) => file.path);
    const payload = Object.assign(Object.assign({}, body), { imageUrls });
    const result = yield image_service_1.ImageService.uploadImages(payload);
    (0, sendResponse_1.sendResponse)(res, { statusCode: 201, success: true, message: "Images uploaded successfully", data: result });
}));
const getAllImages = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield image_service_1.ImageService.getAllImages(req.query);
    (0, sendResponse_1.sendResponse)(res, { statusCode: 200, success: true, message: "Images fetched successfully", data: result });
}));
const deleteEntireCategory = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    const result = yield image_service_1.ImageService.deleteEntireCategory(categoryId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Category and its images deleted permanently",
        data: result,
    });
}));
const deleteSpecificImage = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { imageId } = req.params;
    const { imageUrl } = req.body;
    if (!imageUrl) {
        return (0, sendResponse_1.sendResponse)(res, { statusCode: 400, success: false, message: "Image URL is required to delete", data: null });
    }
    const result = yield image_service_1.ImageService.deleteSpecificImage(imageId, imageUrl);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Selected image deleted successfully",
        data: result,
    });
}));
exports.ImageController = {
    createCategory,
    getAllCategories,
    uploadImages,
    getAllImages,
    deleteEntireCategory,
    deleteSpecificImage,
};
//# sourceMappingURL=image.controller.js.map
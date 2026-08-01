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
exports.ImageService = void 0;
const image_model_1 = require("./image.model");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield image_model_1.Category.create(payload);
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield image_model_1.Category.find();
});
const uploadImages = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield image_model_1.Image.findOne({ categoryId: payload.categoryId });
    if (isExist) {
        return yield image_model_1.Image.findByIdAndUpdate(isExist._id, { $push: { imageUrls: { $each: payload.imageUrls } } }, { new: true });
    }
    return yield image_model_1.Image.create(payload);
});
const getAllImages = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (query.categoryId)
        filter.categoryId = query.categoryId;
    return yield image_model_1.Image.find(filter).populate('categoryId');
});
const deleteEntireCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    yield image_model_1.Image.deleteMany({ categoryId });
    return yield image_model_1.Category.findByIdAndDelete(categoryId);
});
const deleteSpecificImage = (imageId, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    return yield image_model_1.Image.findByIdAndUpdate(imageId, {
        $pull: { imageUrls: imageUrl }
    }, { new: true });
});
exports.ImageService = {
    createCategory,
    getAllCategories,
    uploadImages,
    getAllImages,
    deleteEntireCategory,
    deleteSpecificImage,
};
//# sourceMappingURL=image.service.js.map
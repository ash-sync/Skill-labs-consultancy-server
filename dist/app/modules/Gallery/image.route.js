"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRoutes = void 0;
const express_1 = require("express");
const image_controller_1 = require("./image.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const multer_config_1 = require("../../config/multer.config");
const image_validation_1 = require("./image.validation");
const route = (0, express_1.Router)();
route.post("/create-category", 
//   checkAuth(Role.ADMIN),
(0, validateRequest_1.validateRequest)(image_validation_1.ImageValidationRules.createCategoryValidationRules), image_controller_1.ImageController.createCategory);
route.get("/categories", image_controller_1.ImageController.getAllCategories);
route.post("/upload-images", 
//   checkAuth(Role.ADMIN),
multer_config_1.multerUpload.array("images", 10), (0, validateRequest_1.validateRequest)(image_validation_1.ImageValidationRules.uploadImageValidationRules), image_controller_1.ImageController.uploadImages);
route.get("/", image_controller_1.ImageController.getAllImages);
route.delete("/category/:categoryId", 
//   checkAuth(Role.ADMIN),
image_controller_1.ImageController.deleteEntireCategory);
route.patch("/delete-single-image/:imageId", 
//   checkAuth(Role.ADMIN),
image_controller_1.ImageController.deleteSpecificImage);
exports.ImageRoutes = route;
//# sourceMappingURL=image.route.js.map
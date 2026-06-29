import { Router } from "express";
import { ImageController } from "./image.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../User/user.interface";
import { ImageValidationRules } from "./image.validation";

const route = Router();

route.post(
  "/create-category",
//   checkAuth(Role.ADMIN),
  validateRequest(ImageValidationRules.createCategoryValidationRules),
  ImageController.createCategory
);

route.get("/categories", ImageController.getAllCategories);

route.post(
  "/upload-images",
//   checkAuth(Role.ADMIN),
  multerUpload.array("images", 10),
  validateRequest(ImageValidationRules.uploadImageValidationRules),
  ImageController.uploadImages
);

route.get("/", ImageController.getAllImages);


route.delete(
  "/category/:categoryId",
  //   checkAuth(Role.ADMIN),
  ImageController.deleteEntireCategory
);

route.patch(
  "/delete-single-image/:imageId",
  //   checkAuth(Role.ADMIN),
  ImageController.deleteSpecificImage
);

export const ImageRoutes = route;
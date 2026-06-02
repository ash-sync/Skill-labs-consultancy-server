import { Router } from "express";
import { ServiceController } from "./service.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { ServiceValidationRules } from "./service.validation";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "./../../middlewares/checkAuth";
import { Role } from "../User/user.interface";

const router = Router();

router.post(
  "/",
  checkAuth(Role.ADMIN),
  multerUpload.single("image"),
  validateRequest(ServiceValidationRules.createServiceZodSchema as any),
  ServiceController.createService
);

router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getServiceById);

router.patch(
  "/:id",
  checkAuth(Role.ADMIN),
  multerUpload.single("image"),
  ServiceController.updateService
);

router.delete(
  "/:id",
  checkAuth(Role.ADMIN),
  ServiceController.deleteService
);

export const ServiceRoutes = router;
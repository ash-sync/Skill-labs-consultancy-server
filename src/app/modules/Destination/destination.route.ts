import { Router } from "express";
import { DestinationController } from "./destination.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { DestinationValidationRules } from "./destination.validation";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../User/user.interface";

const route = Router();

route.post(
  "/",
  checkAuth(Role.ADMIN),
  multerUpload.single("image"),
  validateRequest(DestinationValidationRules.createDestinationValidationRules),
  DestinationController.createDestination
);

route.get("/", DestinationController.getAllDestinations);

route.get("/:id", DestinationController.getSingleDestination);

route.patch(
  "/:id",
  checkAuth(Role.ADMIN),
  multerUpload.single("image"),
  validateRequest(DestinationValidationRules.updateDestinationValidationRules),
  DestinationController.updateDestination
);

route.delete(
  "/:id",
  checkAuth(Role.ADMIN),
  DestinationController.deleteDestination
);

export const DestinationRoutes = route;

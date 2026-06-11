"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationRoutes = void 0;
const express_1 = require("express");
const destination_controller_1 = require("./destination.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const destination_validation_1 = require("./destination.validation");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../User/user.interface");
const route = (0, express_1.Router)();
route.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), (0, validateRequest_1.validateRequest)(destination_validation_1.DestinationValidationRules.createDestinationValidationRules), destination_controller_1.DestinationController.createDestination);
route.get("/", destination_controller_1.DestinationController.getAllDestinations);
route.get("/:id", destination_controller_1.DestinationController.getSingleDestination);
route.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), (0, validateRequest_1.validateRequest)(destination_validation_1.DestinationValidationRules.updateDestinationValidationRules), destination_controller_1.DestinationController.updateDestination);
route.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), destination_controller_1.DestinationController.deleteDestination);
exports.DestinationRoutes = route;
//# sourceMappingURL=destination.route.js.map
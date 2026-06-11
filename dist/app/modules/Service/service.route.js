"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const service_controller_1 = require("./service.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const service_validation_1 = require("./service.validation");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("./../../middlewares/checkAuth");
const user_interface_1 = require("../User/user.interface");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), (0, validateRequest_1.validateRequest)(service_validation_1.ServiceValidationRules.createServiceZodSchema), service_controller_1.ServiceController.createService);
router.get("/", service_controller_1.ServiceController.getAllServices);
router.get("/:id", service_controller_1.ServiceController.getServiceById);
router.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), service_controller_1.ServiceController.updateService);
router.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), service_controller_1.ServiceController.deleteService);
exports.ServiceRoutes = router;
//# sourceMappingURL=service.route.js.map
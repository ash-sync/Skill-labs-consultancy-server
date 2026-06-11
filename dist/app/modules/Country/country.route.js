"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRoutes = void 0;
const express_1 = require("express");
const country_controller_1 = require("./country.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const country_validation_1 = require("./country.validation");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../User/user.interface");
const route = (0, express_1.Router)();
route.post("/", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), (0, validateRequest_1.validateRequest)(country_validation_1.CountryValidationRules.createCountryValidationRules), country_controller_1.CountryController.createCountry);
route.get("/", country_controller_1.CountryController.getAllCountries);
route.get("/:id", country_controller_1.CountryController.getSingleCountry);
route.patch("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single("image"), (0, validateRequest_1.validateRequest)(country_validation_1.CountryValidationRules.updateCountryValidationRules), country_controller_1.CountryController.updateCountry);
route.delete("/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), country_controller_1.CountryController.deleteCountry);
exports.CountryRoutes = route;
//# sourceMappingURL=country.route.js.map
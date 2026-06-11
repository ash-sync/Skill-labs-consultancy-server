"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = require("../../middlewares/validateRequest");
const testimonial_validation_1 = require("./testimonial.validation");
const tetimonial_controller_1 = require("./tetimonial.controller");
const route = (0, express_1.Router)();
route.post("/", (0, validateRequest_1.validateRequest)(testimonial_validation_1.TestimonialValidations.createTestimonialValidationSchema), tetimonial_controller_1.TestimonialController.createTestimonial);
route.get("/approved", tetimonial_controller_1.TestimonialController.getApprovedTestimonials);
route.get("/", tetimonial_controller_1.TestimonialController.getAllTestimonials);
route.patch("/:id", (0, validateRequest_1.validateRequest)(testimonial_validation_1.TestimonialValidations.updateTestimonialStatusValidationSchema), tetimonial_controller_1.TestimonialController.updateTestimonialStatus);
route.delete("/:id", tetimonial_controller_1.TestimonialController.deleteTestimonial);
exports.TestimonialRoutes = route;
//# sourceMappingURL=testimonial.route.js.map
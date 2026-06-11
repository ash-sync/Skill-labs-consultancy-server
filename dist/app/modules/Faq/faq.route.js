"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoutes = void 0;
const express_1 = require("express");
const faq_controller_1 = require("./faq.controller");
const faq_validation_1 = require("./faq.validation");
const validateRequest_1 = require("../../middlewares/validateRequest");
const route = (0, express_1.Router)();
route.post("/", (0, validateRequest_1.validateRequest)(faq_validation_1.FaqValidationRules.createFaqValidationSchema), faq_controller_1.FaqController.createFaq);
route.get("/", faq_controller_1.FaqController.getAllFaqs);
route.patch("/:id", (0, validateRequest_1.validateRequest)(faq_validation_1.FaqValidationRules.updateFaqValidationSchema), faq_controller_1.FaqController.updateFaq);
route.delete("/:id", faq_controller_1.FaqController.deleteFaq);
exports.FaqRoutes = route;
//# sourceMappingURL=faq.route.js.map
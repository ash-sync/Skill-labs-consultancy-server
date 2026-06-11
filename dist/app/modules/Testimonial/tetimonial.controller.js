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
exports.TestimonialController = void 0;
const sendResponse_1 = require("../../utils/sendResponse");
const testimonial_service_1 = require("./testimonial.service");
const createTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.createTestimonial(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: 'Testimonial submitted successfully',
        data: result,
    });
});
const getApprovedTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.getApprovedTestimonials();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Approved testimonials retrieved successfully',
        data: result,
    });
});
const getAllTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.getAllTestimonials();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Testimonials retrieved successfully',
        data: result,
    });
});
const updateTestimonialStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.updateTestimonialStatus(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Testimonial status updated successfully',
        data: result,
    });
});
const deleteTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_service_1.TestimonialService.deleteTestimonial(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: 'Testimonial deleted successfully',
        data: result,
    });
});
exports.TestimonialController = {
    createTestimonial,
    getApprovedTestimonials,
    getAllTestimonials,
    updateTestimonialStatus,
    deleteTestimonial,
};
//# sourceMappingURL=tetimonial.controller.js.map
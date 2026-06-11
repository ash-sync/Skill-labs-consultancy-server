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
exports.TestimonialService = void 0;
const testimonial_model_1 = require("./testimonial.model");
const createTestimonial = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.create(payload);
    return result;
});
const getApprovedTestimonials = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.find({ status: 'approved' }).sort({ createdAt: -1 });
    return result;
});
const getAllTestimonials = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.find().sort({ createdAt: -1 });
    return result;
});
const updateTestimonialStatus = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteTestimonial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield testimonial_model_1.Testimonial.findByIdAndDelete(id);
    return result;
});
exports.TestimonialService = {
    createTestimonial,
    getApprovedTestimonials,
    getAllTestimonials,
    updateTestimonialStatus,
    deleteTestimonial
};
//# sourceMappingURL=testimonial.service.js.map
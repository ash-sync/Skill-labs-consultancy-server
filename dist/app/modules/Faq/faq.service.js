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
exports.FaqService = void 0;
const faq_model_1 = require("./faq.model");
const createFaq = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield faq_model_1.Faq.create(payload);
});
const getAllFaqs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield faq_model_1.Faq.find().sort({ createdAt: -1 });
});
const updateFaq = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield faq_model_1.Faq.findByIdAndUpdate(id, payload, { new: true });
});
const deleteFaq = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield faq_model_1.Faq.findByIdAndDelete(id);
});
exports.FaqService = {
    createFaq,
    getAllFaqs,
    updateFaq,
    deleteFaq
};
//# sourceMappingURL=faq.service.js.map
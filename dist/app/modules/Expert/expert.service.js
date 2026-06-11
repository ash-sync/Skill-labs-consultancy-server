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
exports.ExpertServices = void 0;
const expert_model_1 = require("./expert.model");
const createExpertIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_model_1.Expert.create(payload);
    return result;
});
const getAllExpertsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_model_1.Expert.find(query);
    return result;
});
const getSingleExpertFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_model_1.Expert.findById(id);
    return result;
});
const updateExpertIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_model_1.Expert.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteExpertFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_model_1.Expert.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.ExpertServices = {
    createExpertIntoDB,
    getAllExpertsFromDB,
    getSingleExpertFromDB,
    updateExpertIntoDB,
    deleteExpertFromDB,
};
//# sourceMappingURL=expert.service.js.map
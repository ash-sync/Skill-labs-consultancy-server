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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertControllers = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const expert_service_1 = require("./expert.service");
const createExpert = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Received expert data:', req.body, 'file:', req.file);
    let fileUrl = '';
    if (req.file) {
        fileUrl = req.file.path;
    }
    const expertData = Object.assign(Object.assign({}, req.body), { image: fileUrl || req.body.image });
    console.log('Final expert data to be saved:', expertData);
    const result = yield expert_service_1.ExpertServices.createExpertIntoDB(expertData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.CREATED,
        success: true,
        message: 'Expert created successfully',
        data: result,
    });
}));
const fetchAlExperts = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield expert_service_1.ExpertServices.getAllExpertsFromDB(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Experts fetched successfully',
        data: result,
    });
}));
const getSingleExpert = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield expert_service_1.ExpertServices.getSingleExpertFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Expert fetched successfully',
        data: result,
    });
}));
const updateExpert = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let fileUrl = '';
    if (req.file) {
        fileUrl = req.file.path;
    }
    const expertData = Object.assign({}, req.body);
    if (fileUrl) {
        expertData.image = fileUrl;
    }
    const result = yield expert_service_1.ExpertServices.updateExpertIntoDB(id, expertData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Expert updated successfully',
        data: result,
    });
}));
const deleteExpert = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield expert_service_1.ExpertServices.deleteExpertFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.OK,
        success: true,
        message: 'Expert deleted successfully',
        data: result,
    });
}));
exports.ExpertControllers = {
    createExpert,
    fetchAlExperts,
    getSingleExpert,
    updateExpert,
    deleteExpert,
};
//# sourceMappingURL=expert.controller.js.map
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
exports.ServiceController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const service_service_1 = require("./service.service");
const createService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = Object.assign({}, req.body);
    const payload = Object.assign(Object.assign({}, body), (req.file && { icon: req.file.path }));
    const service = yield service_service_1.ServiceService.createService(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Service created successfully",
        data: service,
    });
}));
const getAllServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_service_1.ServiceService.getAllServices();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Services fetched successfully",
        data: services,
    });
}));
const getServiceById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_service_1.ServiceService.getServiceById(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Service fetched successfully",
        data: service,
    });
}));
const updateService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = Object.assign({}, req.body);
    const payload = Object.assign(Object.assign({}, body), (req.file && { icon: req.file.path }));
    const service = yield service_service_1.ServiceService.updateService(req.params.id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Service updated successfully",
        data: service,
    });
}));
const deleteService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_service_1.ServiceService.deleteService(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Service deleted successfully",
        data: service,
    });
}));
exports.ServiceController = {
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
};
//# sourceMappingURL=service.controller.js.map
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
exports.DestinationController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const destination_service_1 = require("./destination.service");
const createDestination = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = Object.assign({}, req.body);
    if (body.topInstitutes &&
        typeof body.topInstitutes === "string") {
        try {
            body.topInstitutes = JSON.parse(body.topInstitutes);
        }
        catch (error) {
            body.topInstitutes = [];
        }
    }
    const payload = Object.assign(Object.assign({}, body), (req.file && { imageUrl: req.file.path }));
    const destination = yield destination_service_1.DestinationService.createDestination(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Destination created successfully",
        data: destination,
    });
}));
const getAllDestinations = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const destinations = yield destination_service_1.DestinationService.getAllDestinations(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Destinations fetched successfully",
        data: destinations,
    });
}));
const getSingleDestination = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const destination = yield destination_service_1.DestinationService.getSingleDestination(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Destination fetched successfully",
        data: destination,
    });
}));
const updateDestination = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body.body ? Object.assign({}, req.body.body) : Object.assign({}, req.body);
    if (body.topInstitutes &&
        typeof body.topInstitutes === "string") {
        try {
            body.topInstitutes = JSON.parse(body.topInstitutes);
        }
        catch (error) {
            body.topInstitutes = [];
        }
    }
    const payload = Object.assign(Object.assign({}, body), (req.file && { imageUrl: req.file.path }));
    const destination = yield destination_service_1.DestinationService.updateDestination(req.params.id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Destination updated successfully",
        data: destination,
    });
}));
const deleteDestination = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const destination = yield destination_service_1.DestinationService.deleteDestination(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Destination deleted successfully",
        data: destination,
    });
}));
exports.DestinationController = {
    createDestination,
    getAllDestinations,
    getSingleDestination,
    updateDestination,
    deleteDestination,
};
//# sourceMappingURL=destination.controller.js.map
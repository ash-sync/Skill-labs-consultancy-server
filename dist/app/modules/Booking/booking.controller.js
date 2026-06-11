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
exports.BookingController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const booking_service_1 = require("./booking.service");
const createBooking = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("BookingController -> createBooking -> req.body", req.body);
    const decodeToken = req.user;
    const userId = (decodeToken === null || decodeToken === void 0 ? void 0 : decodeToken.userId) || (decodeToken === null || decodeToken === void 0 ? void 0 : decodeToken._id) || "";
    const booking = yield booking_service_1.BookingService.createBooking(req.body, userId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Booking created successfully",
        data: booking,
    });
}));
const createBooking2 = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_service_1.BookingService.createBooking2(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Booking created successfully",
        data: booking,
    });
}));
const getAllBookings = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield booking_service_1.BookingService.getAllBookings();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Bookings fetched successfully",
        data: bookings,
    });
}));
const updateStatus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_service_1.BookingService.updateStatus(req.params.id, req.body.status);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Booking status updated successfully",
        data: booking,
    });
}));
const removeBooking = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield booking_service_1.BookingService.removeBooking(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Booking removed successfully",
        data: booking,
    });
}));
exports.BookingController = {
    createBooking,
    getAllBookings,
    updateStatus,
    removeBooking,
    createBooking2
};
//# sourceMappingURL=booking.controller.js.map
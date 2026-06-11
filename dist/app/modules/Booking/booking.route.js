"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const booking_validation_1 = require("./booking.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.validateRequest)(booking_validation_1.BookingValidationRules.createBookingValidationRules), booking_controller_1.BookingController.createBooking);
router.get("/", booking_controller_1.BookingController.getAllBookings);
router.patch("/status/:id", (0, validateRequest_1.validateRequest)(booking_validation_1.BookingValidationRules.updateBookingValidationRules), booking_controller_1.BookingController.updateStatus);
router.delete("/:id", booking_controller_1.BookingController.removeBooking);
router.post("/create-booking2", booking_controller_1.BookingController.createBooking2);
exports.BookingRoutes = router;
//# sourceMappingURL=booking.route.js.map
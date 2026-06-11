"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../modules/User/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const booking_route_1 = require("../modules/Booking/booking.route");
const service_route_1 = require("../modules/Service/service.route");
const country_route_1 = require("../modules/Country/country.route");
const consultation_route_1 = require("../modules/Consultation/consultation.route");
const testimonial_route_1 = require("../modules/Testimonial/testimonial.route");
const faq_route_1 = require("../modules/Faq/faq.route");
const destination_route_1 = require("../modules/Destination/destination.route");
const expert_route_1 = require("../modules/Expert/expert.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/booking",
        route: booking_route_1.BookingRoutes,
    },
    {
        path: "/service",
        route: service_route_1.ServiceRoutes,
    },
    {
        path: "/country",
        route: country_route_1.CountryRoutes,
    },
    {
        path: "/consultation",
        route: consultation_route_1.ConsultationRoutes,
    },
    {
        path: "/testimonial",
        route: testimonial_route_1.TestimonialRoutes,
    },
    {
        path: "/faq",
        route: faq_route_1.FaqRoutes,
    },
    {
        path: "/destination",
        route: destination_route_1.DestinationRoutes,
    },
    {
        path: "/expert",
        route: expert_route_1.ExpertRoutes,
    }
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
//# sourceMappingURL=index.js.map
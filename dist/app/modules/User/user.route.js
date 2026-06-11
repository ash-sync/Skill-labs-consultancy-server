"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.UserController.getAllUsers);
router.get("/:id", user_controller_1.UserController.getUserById);
router.patch("/make-admin/:id", user_controller_1.UserController.makeAdmin);
exports.UserRoutes = router;
//# sourceMappingURL=user.route.js.map
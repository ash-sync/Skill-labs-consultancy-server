"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./app/routes");
const notFound_1 = require("./app/utils/notFound");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Skill labs Server"
    });
});
app.use('/api', routes_1.router);
app.use(notFound_1.notFound);
app.use(globalErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
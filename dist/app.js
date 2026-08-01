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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./app/routes");
const notFound_1 = require("./app/utils/notFound");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const db_1 = require("./app/config/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const allowedOrigins = [
    "http://localhost:4173",
    "http://localhost:3000",
    "http://localhost:5173",
    "https://skill-labs-consultancy-client.vercel.app",
];
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, Postman)
        if (!origin)
            return callback(null, true);
        const cleanOrigin = origin.replace(/\/$/, "");
        if (allowedOrigins.includes(cleanOrigin) ||
            cleanOrigin.endsWith(".vercel.app") ||
            process.env.NODE_ENV !== "production") {
            return callback(null, true);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
}));
// Middleware to ensure DB is connected for every request (especially in Vercel serverless environment)
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, db_1.connectDB)();
        next();
    }
    catch (error) {
        next(error);
    }
}));
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Skill labs Consultancy Server",
    });
});
app.use("/api", routes_1.router);
app.use(notFound_1.notFound);
app.use(globalErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
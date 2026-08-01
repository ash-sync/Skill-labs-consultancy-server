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
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
const seedAdmin_1 = __importDefault(require("../utils/seedAdmin"));
const seedDemoData_1 = require("../utils/seedDemoData");
let isSeeded = false;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connection.readyState >= 1) {
        return;
    }
    try {
        yield mongoose_1.default.connect(env_1.envVars.DB_URL);
        console.log("Connected to MongoDB successfully!");
        if (!isSeeded) {
            isSeeded = true;
            yield (0, seedAdmin_1.default)();
            yield (0, seedDemoData_1.seedDemoData)();
        }
    }
    catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
});
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map
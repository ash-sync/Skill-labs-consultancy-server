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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_codes_1 = require("http-status-codes");
const env_1 = require("../../config/env");
const AppError_1 = require("../../errorHelpers/AppError");
const token_1 = require("../../utils/token");
const user_model_1 = require("../User/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload, rest = __rest(payload, ["email", "password"]);
    if (!email || !password) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Email and password required");
    }
    const isUserExist = yield user_model_1.User.findOne({ email });
    if (isUserExist) {
        throw new AppError_1.AppError(http_status_codes_1.StatusCodes.BAD_REQUEST, "User already exist");
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, env_1.envVars.BCRYPT_SALT_ROUND);
    const user = yield user_model_1.User.create(Object.assign({ email, password: hashedPassword }, rest));
    return user;
});
const logInUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email }).select("+password");
    if (!user) {
        throw new AppError_1.AppError(404, "User not found");
    }
    const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordCorrect) {
        throw new AppError_1.AppError(401, "Incorrect password");
    }
    const userData = {
        name: user.name,
        email: user.email,
        role: user.role,
        _id: user._id,
    };
    return (0, token_1.useToken)(userData);
});
exports.AuthService = {
    registerUser,
    logInUser,
};
//# sourceMappingURL=auth.service.js.map
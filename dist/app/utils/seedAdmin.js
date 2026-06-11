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
const env_1 = require("../config/env");
const user_interface_1 = require("../modules/User/user.interface");
const user_model_1 = require("../modules/User/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAdminExist = yield user_model_1.User.findOne({ email: env_1.envVars.ADMIN_EMAIL });
        if (isAdminExist) {
            console.log("Admin user already exists. Skipping seeding.");
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(env_1.envVars.ADMIN_PASSWORD, 10);
        const payload = {
            name: "Super admin",
            role: user_interface_1.Role.ADMIN,
            email: env_1.envVars.ADMIN_EMAIL,
            password: hashedPassword,
        };
        yield user_model_1.User.create(payload);
        console.log("Admin user created successfully.");
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = seedAdmin;
//# sourceMappingURL=seedAdmin.js.map
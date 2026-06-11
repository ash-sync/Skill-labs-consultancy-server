"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
const jwt_1 = require("./jwt");
const env_1 = require("../config/env");
const useToken = (payload) => {
    console.log(payload, "payload");
    const userData = {
        _id: payload._id,
        name: payload.name,
        email: payload.email,
        role: payload.role,
    };
    console.log(userData, "userData");
    const accessToken = (0, jwt_1.generateToken)(userData, env_1.envVars.JWT_SECRET, env_1.envVars.JWT_EXPIRES_IN);
    const refreshToken = (0, jwt_1.generateToken)(userData, env_1.envVars.JWT_SECRET, env_1.envVars.JWT_EXPIRES_IN);
    return {
        accessToken,
        refreshToken: refreshToken,
    };
};
exports.useToken = useToken;
//# sourceMappingURL=token.js.map
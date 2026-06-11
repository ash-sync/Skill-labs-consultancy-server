"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const consultation_validaion_1 = require("./consultation.validaion");
const consultation_controller_1 = require("./consultation.controller");
const multer_config_1 = require("../../config/multer.config");
const router = express_1.default.Router();
router.post('/', multer_config_1.multerUpload.single('image'), (0, validateRequest_1.validateRequest)(consultation_validaion_1.ConsultationValidations.createConsultationValidationSchema), consultation_controller_1.ConsultationControllers.createConsultation);
router.get('/', consultation_controller_1.ConsultationControllers.getAllConsultations);
exports.ConsultationRoutes = router;
//# sourceMappingURL=consultation.route.js.map
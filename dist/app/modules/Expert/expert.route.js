"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertRoutes = void 0;
const express_1 = __importDefault(require("express"));
const expert_controller_1 = require("./expert.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const expert_validation_1 = require("./expert.validation");
const multer_config_1 = require("../../config/multer.config");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../User/user.interface");
const router = express_1.default.Router();
router.post('/', (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single('file'), (req, res, next) => {
    if (req.body.tags && typeof req.body.tags === 'string') {
        try {
            req.body.tags = JSON.parse(req.body.tags);
        }
        catch (error) {
            req.body.tags = [];
        }
    }
    next();
}, (0, validateRequest_1.validateRequest)(expert_validation_1.ExpertValidations.createExpertValidationSchema), expert_controller_1.ExpertControllers.createExpert);
router.patch('/:id', (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), multer_config_1.multerUpload.single('file'), (req, res, next) => {
    if (req.body.tags && typeof req.body.tags === 'string') {
        try {
            req.body.tags = JSON.parse(req.body.tags);
        }
        catch (error) {
            req.body.tags = [];
        }
    }
    next();
}, (0, validateRequest_1.validateRequest)(expert_validation_1.ExpertValidations.updateExpertValidationSchema), expert_controller_1.ExpertControllers.updateExpert);
router.get('/', expert_controller_1.ExpertControllers.fetchAlExperts);
router.get('/:id', expert_controller_1.ExpertControllers.getSingleExpert);
router.delete('/:id', (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN), expert_controller_1.ExpertControllers.deleteExpert);
exports.ExpertRoutes = router;
//# sourceMappingURL=expert.route.js.map
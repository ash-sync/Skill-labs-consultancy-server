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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationService = void 0;
const destination_model_1 = require("./destination.model");
const createDestination = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield destination_model_1.Destination.create(payload);
});
const getAllDestinations = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        isDeleted: false,
    };
    if (query.country) {
        filter.country = {
            $regex: query.country,
            $options: "i",
        };
    }
    return yield destination_model_1.Destination.find(filter);
});
const getSingleDestination = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield destination_model_1.Destination.findById(id);
});
const updateDestination = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield destination_model_1.Destination.findByIdAndUpdate(id, payload, {
        new: true,
    });
});
const deleteDestination = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield destination_model_1.Destination.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
});
exports.DestinationService = {
    createDestination,
    getAllDestinations,
    getSingleDestination,
    updateDestination,
    deleteDestination,
};
//# sourceMappingURL=destination.service.js.map
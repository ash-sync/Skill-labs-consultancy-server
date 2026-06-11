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
exports.CountryService = void 0;
const country_model_1 = require("./country.model");
const createCountry = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield country_model_1.Country.create(payload);
});
const getAllCountries = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    if (query.name) {
        filter.name = { $regex: query.name, $options: "i" };
    }
    return yield country_model_1.Country.find(filter);
});
const getSingleCountry = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield country_model_1.Country.findById(id);
});
const updateCountry = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield country_model_1.Country.findByIdAndUpdate(id, payload, { new: true });
});
const deleteCountry = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield country_model_1.Country.findByIdAndDelete(id);
});
exports.CountryService = {
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry
};
//# sourceMappingURL=country.services.js.map
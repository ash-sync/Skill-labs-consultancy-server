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
exports.CountryController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const country_services_1 = require("./country.services");
const createCountry = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = Object.assign({}, req.body);
    if (body.institutes && typeof body.institutes === "string") {
        try {
            body.institutes = JSON.parse(body.institutes);
        }
        catch (e) {
            body.institutes = [body.institutes];
        }
        ;
    }
    const payload = Object.assign(Object.assign({}, body), (req.file && { image: req.file.path }));
    console.log(payload);
    const country = yield country_services_1.CountryService.createCountry(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Country created successfully",
        data: country,
    });
}));
const getAllCountries = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const countries = yield country_services_1.CountryService.getAllCountries(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Countries fetched successfully",
        data: countries,
    });
}));
const getSingleCountry = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield country_services_1.CountryService.getSingleCountry(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Country fetched successfully",
        data: country,
    });
}));
const updateCountry = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body.body || req.body;
    const payload = Object.assign(Object.assign({}, data), (req.file && { image: req.file.path }));
    const country = yield country_services_1.CountryService.updateCountry(req.params.id, payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Country updated successfully",
        data: country,
    });
}));
const deleteCountry = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const country = yield country_services_1.CountryService.deleteCountry(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Country deleted successfully",
        data: country,
    });
}));
exports.CountryController = {
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry
};
//# sourceMappingURL=country.controller.js.map
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
exports.CustomerController = void 0;
const http_response_1 = require("../../shared/response/http.response");
const customer_service_1 = require("../services/customer.service");
class CustomerController {
    constructor(customerService = new customer_service_1.CustomerService(), httpResponse = new http_response_1.HttpResponse()) {
        this.customerService = customerService;
        this.httpResponse = httpResponse;
    }
    getCustomers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.customerService.findAllCustomers();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, "No data");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    getCustomerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.findCustomerById(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "No Data");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    createCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.customerService.createCustomer(req.body);
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    updateCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.updateCustomer(id, req.body);
                if (!data.affected) {
                    return this.httpResponse.NotFound(res, "Update Error");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    deleteCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.customerService.deleteCustomer(id);
                if (!data.affected) {
                    return this.httpResponse.NotFound(res, "Delete Error");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
}
exports.CustomerController = CustomerController;

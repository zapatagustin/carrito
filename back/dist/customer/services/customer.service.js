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
exports.CustomerService = void 0;
const base_service_1 = require("../../config/base.service");
const user_dto_1 = require("../../user/dto/user.dto");
const user_service_1 = require("../../user/services/user.service");
class CustomerService extends base_service_1.BaseService {
    constructor(userService = new user_service_1.UserService()) {
        super(CustomerService);
        this.userService = userService;
    }
    findAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).find();
        });
    }
    findCustomerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).findOneBy({ id });
        });
    }
    createCustomer(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createCustomer = (yield this.execRepository).create(body);
            const user = yield this.userService.findUserById(createCustomer.user.id);
            if (user) {
                yield this.userService.updateUser(user.id, Object.assign(Object.assign({}, user), { role: user_dto_1.RoleType.CUSTOMER }));
                return (yield this.execRepository).save(body);
            }
            return null;
        });
    }
    deleteCustomer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).delete({ id });
        });
    }
    updateCustomer(id, infoUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.execRepository).update(id, infoUpdate);
        });
    }
}
exports.CustomerService = CustomerService;

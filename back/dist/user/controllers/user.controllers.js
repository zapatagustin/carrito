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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const http_response_1 = require("../../shared/response/http.response");
class UserController {
    constructor(userService = new user_service_1.UserService(), httpResponse = new http_response_1.HttpResponse()) {
        this.userService = userService;
        this.httpResponse = httpResponse;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userService.findAllUser();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, "No existe dato");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.findUserById(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "No existe dato");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    getUserWithRelationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.findUserWithRelation(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "No existe dato");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userService.createUser(req.body);
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.updateUser(id, req.body);
                if (!data.affected) {
                    return this.httpResponse.NotFound(res, "Hay un error en actualizar");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (e) {
                console.error(e);
                return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.deleteUser(id);
                if (!data.affected) {
                    return this.httpResponse.NotFound(res, "Hay un error en actualizar");
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
exports.UserController = UserController;

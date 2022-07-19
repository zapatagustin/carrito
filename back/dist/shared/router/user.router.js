"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var router_1 = require("./router");
var user_controllers_1 = require("../../user/controllers/user.controllers");
var UserRouter = /** @class */ (function (_super) {
    __extends(UserRouter, _super);
    function UserRouter() {
        return _super.call(this, user_controllers_1.UserController) || this;
    }
    UserRouter.prototype.routes = function () {
        var _this = this;
        this.router.get("/users", function (req, res) { return _this.controller.getUsers(req, res); });
    };
    return UserRouter;
}(router_1.BaseRouter));
exports.UserRouter = UserRouter;

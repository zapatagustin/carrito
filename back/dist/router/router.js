"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
var express_1 = require("express");
var BaseRouter = /** @class */ (function () {
    //public middleware: U
    function BaseRouter(TController) {
        this.router = (0, express_1.Router)();
        this.controller = new TController();
        this.routes();
    }
    BaseRouter.prototype.routes = function () { };
    return BaseRouter;
}());
exports.BaseRouter = BaseRouter;

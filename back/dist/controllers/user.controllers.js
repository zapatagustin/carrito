"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUsers = function (req, res) {
        res.status(200).json({ message: "Successfully Registered" });
    };
    return UserController;
}());
exports.UserController = UserController;

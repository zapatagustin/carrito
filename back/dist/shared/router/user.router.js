"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const router_1 = require("./router");
const user_controllers_1 = require("../../user/controllers/user.controllers");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(user_controllers_1.UserController);
    }
    routes() {
        this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
        this.router.get("/user/:id", (req, res) => this.controller.getUserById(req, res));
        this.router.post("/createUser", (req, res) => this.controller.createUser(req, res));
        this.router.put("/updateUser/:id", (req, res) => this.controller.updateUser(req, res));
        this.router.delete("/deleteUser/:id", (req, res) => this.controller.deleteUser(req, res));
    }
}
exports.UserRouter = UserRouter;

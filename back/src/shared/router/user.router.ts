import { BaseRouter } from "./router";
import { UserController } from "../../user/controllers/user.controllers";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
	}
}

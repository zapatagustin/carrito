import { BaseService } from "../../config/base.service";
import { UserEntity } from "../entities/user.entitiy";

export class UserService extends BaseService<UserEntity> {
    constructor() {
        super(UserEntity)
    }
}
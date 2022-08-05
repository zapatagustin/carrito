import { DeleteResult } from "typeorm";
import { UpdateResult } from "typeorm/query-builder/result/UpdateResult";
import { BaseService } from "../../config/base.service";
import { UserEntity } from "../../user/entities/user.entitiy";
import { UserDTO } from "../dto/user.dto";

export class UserService extends BaseService<UserEntity> {
    constructor() {
      super(UserEntity);
    }

   async findAllUser(): Promise<UserEntity[]> {
        return (await this.execRepository).find()
   }

   async findUserById(id: string): Promise<UserEntity | null> {
    return (await this.execRepository).findOneBy({ id });
   }
   async createUser(body: any): Promise<UserEntity> {
    return (await this.execRepository).save(body);
   }
   async deleteUser(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
   }
   async updateUser(id: string, infoUpdate: any): Promise<UpdateResult> {
     return (await this.execRepository).update(id, infoUpdate);
   }
}
import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { UserEntity } from "../../user/entities/user.entitiy";

export class CustomerDTO extends BaseDTO {

  @IsNotEmpty()
  address!: string

  @IsNotEmpty()
  dni!: number

  user!: UserEntity
}

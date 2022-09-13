import { IsNotEmpty } from "class-validator"
import { BaseDTO } from "../../config/base.dto"
import { CategoryEntity } from "../../category/entities/category.entity"
import { UserEntity } from "../../user/entities/user.entitiy"

export class CustomerDTO extends BaseDTO {
  @IsNotEmpty()
  address!: string

  @IsNotEmpty()
  dni!: number

  @IsNotEmpty()
  user!: UserEntity
}

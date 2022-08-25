import { Exclude } from "class-transformer";
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entitiy";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { RoleType } from "../dto/user.dto";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column({ select: false })
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column({ type: "enum", enum: RoleType, nullable: false })
  role!: RoleType;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}

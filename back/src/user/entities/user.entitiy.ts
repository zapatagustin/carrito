import { Column, Entity, OneToOne } from "typeorm";
import { ExclusionMetadata } from "typeorm/metadata/ExclusionMetadata";
import { BaseEntity } from '../../config/base.entitiy'
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity ({ name: 'users' })
export class UserEntity extends BaseEntity {
    @Column()
    name!: string

    @Column()
    lastname!:string

    @Column()
    username!:string

    @Column()
    email!:string

    //@Exclude()
    @Column()
    password!:string

    @Column()
    city!:string

    @Column()
    province!:string

    @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: string
}
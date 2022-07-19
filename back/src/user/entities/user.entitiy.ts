import { Column, Entity } from "typeorm";
import { BaseEntity } from "typeorm";

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

    @Column()
    password!:string

    @Column()
    city!:string

    @Column()
    numberPhone!:string

    @Column()
    province!:string
}
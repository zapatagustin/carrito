import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entitiy'
import { PurchaseEntity } from '../../purchase/entities/purchase.entity'
import { UserEntity } from '../../user/entities/user.entitiy'

Entity({ name: 'customer'})
export class CustomerEntity extends BaseEntity {
    @Column()
    address!: string

    @Column()
    dni!: number

    @OneToOne(() => UserEntity, (user)=> user.customer)
    @JoinColumn({name: "user_id"})
    user!: UserEntity[]

    @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
    purchases!: PurchaseEntity[]
}
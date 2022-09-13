import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entitiy'
import { ProductEntity } from '../../product/entities/product.entity'

Entity({ name: 'category'})
export class CategoryEntity extends BaseEntity {
    @Column()
    name!: string

    @OneToMany(() => ProductEntity, (product) => product.category)
    products!: ProductEntity[]
}
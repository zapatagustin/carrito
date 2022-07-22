import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entitiy'
import { CategoryEntity } from '../../category/entities/category.entity'
import { PurchaseProductEntity } from '../../purchase/entities/purchases-products.entity'

Entity({ name: 'product'})
export class ProductEntity extends BaseEntity {
    @Column()
    productName!: string

    @Column()
    description!: string

    @Column()
    price!: number

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    @JoinColumn({ name: "category_id" })
    category!: CategoryEntity

    
    @OneToMany(
        () => PurchaseProductEntity,
        (purchaseProduct) => purchaseProduct.purchase
    )
    purchaseProduct!: PurchaseProductEntity[];
}
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entitiy'
import { PurchaseEntity } from "./purchase.entity"
import { ProductEntity } from "../../product/entities/product.entity"

Entity({ name: 'purchases_products'})
export class PurchaseProductEntity extends BaseEntity {
    @Column()
    quatityProduct!: number

    @Column()
    totalPrice!: number

    @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
    @JoinColumn({name: "purchase_id"})
    purchase!: PurchaseEntity

    @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
    @JoinColumn({name: "product_id"})
    product!: ProductEntity
}
import "reflect-metadata"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import { UserRouter } from "./user/user.router"
import { ConfigServer } from "./config/config"
import { PurchaseRouter } from "./purchase/purchase.router"
import { ProductRouter } from "./product/product.router"
import { CustomerRouter } from "./customer/customer.router"
import { CategoryRouter } from "./category/category.router"
import { PurchaseProductRouter } from "./purchase/purchase-product.router"
import { DataSource } from "typeorm"

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express()
  private port: number = this.getNumberEnv("PORT")

  constructor() {
    super()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.dbConnect()
    this.app.use(morgan("dev"))
    this.app.use(cors())

    this.app.use("/api", this.routers())
    this.listen()
  }

  routers(): Array<express.Router> {
    return [
      new UserRouter().router,
      new PurchaseRouter().router,
      new ProductRouter().router,
      new CustomerRouter().router,
      new CategoryRouter().router,
      new PurchaseProductRouter().router,
    ]
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success")
      })
      .catch((err) => {
        console.error(err)
      })
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port =>" + this.port)
    })
  }
}

new ServerBootstrap()

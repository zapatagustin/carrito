import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { RoleType } from "../../user/dto/user.dto";
import { UserService } from "../../user/services/user.service";
import { CustomerDTO } from "../dto/customer.dto";
import { CustomerEntity } from "../entities/customer.entity";

export class CustomerService extends BaseService<CustomerEntity> {
  constructor(private readonly userService: UserService = new UserService()) {
    super(CustomerService)
  }

  async findAllCustomers(): Promise<CustomerEntity[]> {
    return (await this.execRepository).find();
  }

  async findCustomerById(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async createCustomer(body: CustomerDTO): Promise<CustomerEntity | null> {
    const createCustomer = (await this.execRepository).create(body)
    const user = await this.userService.findUserById(createCustomer.user.id)

    if (user) {
      await this.userService.updateUser(user.id, {
        ...user,
        role: RoleType.CUSTOMER,
      });

      return (await this.execRepository).save(body);
    }

    return null;
  }
  async deleteCustomer(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateCustomer(
    id: string,
    infoUpdate: CustomerDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}

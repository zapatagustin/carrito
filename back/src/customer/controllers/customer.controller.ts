import { HttpResponse } from "../../shared/response/http.response";
import { CustomerService } from "../services/customer.service";
import { DeleteResult, UpdateResult } from "typeorm";
import { Request, Response } from "express";

export class CustomerController {
  constructor(
    private readonly customerService: CustomerService = new CustomerService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) { }

  async getCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.findAllCustomers();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No data");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
    }
  }
  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.findCustomerById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "No Data");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
    }
  }
  async createCustomer(req: Request, res: Response) {
    try {
      const data = await this.customerService.createCustomer(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
    }
  }
  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: UpdateResult = await this.customerService.updateCustomer(
        id,
        req.body
      );
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Update Error");
      }

      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
    }
  }
  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data: DeleteResult = await this.customerService.deleteCustomer(id);
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Delete Error");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
      return this.httpResponse.INTERNAL_SERVER_ERROR(res, e);
    }
  }
}

import { Request, Response } from "express";
import { GetAllBannersService } from "../services/GetAllBannersService";

export class GetAllBannersController {
  async handle(request: Request, response: Response) {
    console.log("DEBUG: request:", request);
    const service = new GetAllBannersService();
    const banners = await service.execute();

    return response.json(banners);
  }
}

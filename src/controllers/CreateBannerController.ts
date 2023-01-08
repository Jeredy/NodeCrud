import { Request, Response } from "express";
import { CreateBannerService } from "../services/CreateBannerService";

export class CreateBannerController {
  async handle(request: Request, response: Response) {
    const { title, description, link } = request.body;

    const service = new CreateBannerService();

    const result = await service.execute({ title, description, link });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

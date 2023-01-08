import { Request, Response } from "express";
import { GetVideoByCategoryService } from "../services/GetVideoByCategoryService";

export class GetVideoByCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetVideoByCategoryService();
    const videos = await service.execute({ id });

    return response.json(videos);
  }
}

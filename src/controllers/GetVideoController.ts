import { Request, Response } from "express";
import { GetVideoService } from "../services/GetVideoService";

export class GetVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetVideoService();
    const videos = await service.execute({ id });

    return response.json(videos);
  }
}

import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
  async handle(request: Request, response: Response) {
    const { name, description, category_id, duration, year } = request.body;
    const service = new CreateVideoService();

    const result = service.execute({
      name,
      description,
      category_id,
      duration,
      year,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}

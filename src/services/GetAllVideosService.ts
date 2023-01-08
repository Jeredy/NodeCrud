import { myDataSource } from "../../ormconfig";
import { Videos } from "../entity/Videos.entity";

export class GetAllVideosService {
  async execute() {
    const repo = myDataSource.getRepository(Videos);

    const videos = await repo.find({ relations: ["category"] });

    return videos;
  }
}

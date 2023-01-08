import { myDataSource } from "../../ormconfig";
import { Videos } from "../entity/Videos.entity";

export class GetVideoService {
  async execute({ id }) {
    const repo = myDataSource.getRepository(Videos);

    const videos = await repo.find({
      where: { id },
      relations: ["category"],
    });

    return videos;
  }
}

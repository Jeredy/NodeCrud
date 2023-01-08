import { myDataSource } from "../../ormconfig";
import { Videos } from "../entity/Videos.entity";

export class GetVideoByCategoryService {
  async execute({ id }) {
    const repo = myDataSource.getRepository(Videos);

    const videos = await repo.find({
      where: { category_id: id },
      relations: ["category"],
    });

    return videos;
  }
}

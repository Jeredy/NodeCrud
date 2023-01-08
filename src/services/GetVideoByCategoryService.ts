import { myDataSource } from "../../ormconfig";

export class GetVideoByCategoryService {
  async execute({ id }) {
    const repo = myDataSource.getRepository("videos");

    const videos = await repo.find({
      where: { category_id: id },
      relations: ["category"],
    });

    return videos;
  }
}

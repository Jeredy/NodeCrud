import { myDataSource } from "../../ormconfig";

export class GetVideoService {
  async execute({ id }) {
    const repo = myDataSource.getRepository("videos");

    const videos = await repo.find({
      where: { id },
      relations: ["category"],
    });

    return videos;
  }
}

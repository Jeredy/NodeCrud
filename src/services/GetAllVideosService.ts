import { myDataSource } from "../../ormconfig";

export class GetAllVideosService {
  async execute() {
    const repo = myDataSource.getRepository("Videos");

    const videos = await repo.find({ relations: ["category"] });

    return videos;
  }
}

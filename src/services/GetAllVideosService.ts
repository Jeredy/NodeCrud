import { myDataSource } from "../../ormconfig";

export class GetAllVideosService {
  async execute() {
    const repo = myDataSource.getRepository("videos");

    const videos = await repo.find({ relations: ["category"] });

    return videos;
  }
}

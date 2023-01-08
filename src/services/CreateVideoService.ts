import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";
import { Videos } from "../entity/Videos.entity";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
  year: number;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    category_id,
    duration,
    year,
  }: VideoRequest): Promise<Videos | Error> {
    const repo = myDataSource.getRepository(Videos);
    const repoCategory = myDataSource.getRepository(Category);

    if (!(await repoCategory.findOne({ where: { id: category_id } }))) {
      return new Error("Category does not exists!");
    }

    const video = repo.create({
      name,
      description,
      category_id,
      duration,
      year,
    });

    await repo.save(video);

    return video as Videos;
  }
}

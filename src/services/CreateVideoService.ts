import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";
import { Videos } from "../entity/Videos.entity";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
  image: string;
  year: number;
  rate: number;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    category_id,
    duration,
    image,
    year,
    rate,
  }: VideoRequest): Promise<Videos | Error> {
    const repo = myDataSource.getRepository(Videos);
    const repoCategory = myDataSource.getRepository(Category);

    if (!(await repoCategory.findOne({ where: { id: category_id } }))) {
      return new Error("Category does not exists!");
    }

    if (await repo.findOne({ where: { name } })) {
      return new Error("Category name already exists!");
    }

    const video = repo.create({
      name,
      description,
      category_id,
      duration,
      image,
      year,
      rate,
    });

    await repo.save(video);

    return video as Videos;
  }
}

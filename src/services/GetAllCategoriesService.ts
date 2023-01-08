import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";

export class GetAllCategoriesService {
  async execute() {
    const repo = myDataSource.getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}

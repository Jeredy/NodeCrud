import { myDataSource } from "../../ormconfig";

export class GetAllCategoriesService {
  async execute() {
    const repo = myDataSource.getRepository("Category");

    const categories = await repo.find();

    return categories;
  }
}

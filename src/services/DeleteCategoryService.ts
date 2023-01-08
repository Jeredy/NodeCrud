import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = myDataSource.getRepository(Category);

    if (!(await repo.findOne({ where: { id } }))) {
      return new Error("Category does not exists");
    }

    await repo.delete(id);
  }
}

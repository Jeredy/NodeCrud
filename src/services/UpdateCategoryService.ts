import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const repo = myDataSource.getRepository(Category);

    const category = await repo.findOne({
      where: {
        id,
      },
    });

    if (!category) {
      return new Error("Category does not exists!");
    }

    category.name = name ?? category.name;
    category.description = description ?? category.description;

    await repo.save(category);

    return category;
  }
}

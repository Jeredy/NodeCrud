import { myDataSource } from "../../ormconfig";

export class GetAllBannersService {
  async execute() {
    const repo = myDataSource.getRepository("banners");

    const banners = await repo.find();

    return banners;
  }
}

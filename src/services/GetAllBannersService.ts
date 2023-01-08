import { myDataSource } from "../../ormconfig";
import { Banner } from "../entity/Banner.entity";

export class GetAllBannersService {
  async execute() {
    const repo = myDataSource.getRepository(Banner);

    const banners = await repo.find();

    return banners;
  }
}

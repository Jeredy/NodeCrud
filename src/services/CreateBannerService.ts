import { myDataSource } from "../../ormconfig";
import { Banner } from "../entity/Banner.entity";

type BannerRequest = {
  title: string;
  description: string;
  link: string;
};

export class CreateBannerService {
  async execute({
    title,
    description,
    link,
  }: BannerRequest): Promise<Banner | Error> {
    const repo = myDataSource.getRepository("banners");

    //SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
    if (
      await repo.findOne({
        where: {
          title,
        },
      })
    ) {
      return new Error("Banner already exists");
    }

    const banner = repo.create({
      title,
      description,
      link,
    });

    await repo.save(banner);

    return banner as Banner;
  }
}

import { Router } from "express";
import { CreateBannerController } from "../controllers/CreateBannerController";
import { GetAllBannersController } from "../controllers/GetAllBannersController";
import { UserAuthMiddleware } from "../middleware/auth";

const BannerRoutes = Router();

BannerRoutes.post(
  "/banners",
  new UserAuthMiddleware().handle,
  new CreateBannerController().handle
);
BannerRoutes.get(
  "/banners",
  new UserAuthMiddleware().handle,
  new GetAllBannersController().handle
);

export default BannerRoutes;

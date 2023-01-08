import { Router } from "express";
import AuthController from "./controllers/AuthController";
import { CreateBannerController } from "./controllers/CreateBannerController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import UserController from "./controllers/CreateUserController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllBannersController } from "./controllers/GetAllBannersController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { GetVideoByCategoryController } from "./controllers/GetVideoByCategoryController";
import { GetVideoController } from "./controllers/GetVideoController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { UserAuthMiddleware } from "./middleware/auth";

const routes = Router();

//CATEGORIES
routes.post(
  "/categories",
  new UserAuthMiddleware().handle,
  new CreateCategoryController().handle
);
routes.get(
  "/categories",
  new UserAuthMiddleware().handle,
  new GetAllCategoriesController().handle
);
routes.delete(
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new DeleteCategoryController().handle
);
routes.put(
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new UpdateCategoryController().handle
);

//VIDEOS
routes.post(
  "/videos",
  new UserAuthMiddleware().handle,
  new CreateVideoController().handle
);
routes.get(
  "/videos",
  new UserAuthMiddleware().handle,
  new GetAllVideosController().handle
);
routes.get(
  "/videos/:id",
  new UserAuthMiddleware().handle,
  new GetVideoController().handle
);
routes.get(
  "/videos/categoryId/:id",
  new UserAuthMiddleware().handle,
  new GetVideoByCategoryController().handle
);

//BANNERS
routes.post(
  "/banners",
  new UserAuthMiddleware().handle,
  new CreateBannerController().handle
);
routes.get(
  "/banners",
  new UserAuthMiddleware().handle,
  new GetAllBannersController().handle
);

//AUTH
routes.post("/login", new AuthController().handle);
routes.post("/createUser", new UserController().handle);

export { routes };

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

const routes = Router();

//CATEGORIES
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

//VIDEOS
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.get("/videos/:id", new GetVideoController().handle);
routes.get("/videos/categoryId/:id", new GetVideoByCategoryController().handle);

//BANNERS
routes.post("/banners", new CreateBannerController().handle);
routes.get("/banners", new GetAllBannersController().handle);

//AUTH
routes.post("/login", new AuthController().handle);
routes.post("/createUser", new UserController().handle);

export { routes };

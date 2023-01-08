import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";
import { GetVideoByCategoryController } from "../controllers/GetVideoByCategoryController";
import { GetVideoController } from "../controllers/GetVideoController";
import { UserAuthMiddleware } from "../middleware/auth";

const VideoRoutes = Router();

VideoRoutes.post(
  "/videos",
  new UserAuthMiddleware().handle,
  new CreateVideoController().handle
);
VideoRoutes.get(
  "/videos",
  new UserAuthMiddleware().handle,
  new GetAllVideosController().handle
);
VideoRoutes.get(
  "/videos/:id",
  new UserAuthMiddleware().handle,
  new GetVideoController().handle
);
VideoRoutes.get(
  "/videos/categoryId/:id",
  new UserAuthMiddleware().handle,
  new GetVideoByCategoryController().handle
);

export default VideoRoutes;

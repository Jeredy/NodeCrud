import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { UserAuthMiddleware } from "../middleware/auth";

const CategoryRoutes = Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Category:
 *        type: object
 *        required:
 *          - name
 *          - description
 *        properties:
 *          id:
 *             type: string
 *             description: The auto-generated id of Category
 *          name:
 *              type: string
 *              description: The category name
 *          description:
 *              type: string
 *              description: The category description
 *        example:
 *          id: asd9283_adcb
 *          name: Comedy
 *          description: Funny Movies
 */

CategoryRoutes.post(
  "/categories",
  new UserAuthMiddleware().handle,
  new CreateCategoryController().handle
);
CategoryRoutes.get(
  "/categories",
  new UserAuthMiddleware().handle,
  new GetAllCategoriesController().handle
);
CategoryRoutes.delete(
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new DeleteCategoryController().handle
);
CategoryRoutes.put(
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new UpdateCategoryController().handle
);

export default CategoryRoutes;

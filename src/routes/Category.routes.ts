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

/**
 * @swagger
 * /categories:
 *  post:
 *      security:
 *         - bearerAuth: []
 *      summary: Create a new category
 *      tags: [Category]
 *      requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Category'
 *      responses:
 *          200:
 *              description: The category was successfuly created
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Category'
 *          400:
 *              description: Error while creating the category
 */

/**
 * @swagger
 * /categories:
 *  get:
 *      security:
 *         - bearerAuth: []
 *      summary: Get the category by id
 *      tags: [Category]
 *
 *      responses:
 *          200:
 *              description: The category description by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Category'
 *          400:
 *              description: The category was not found
 */

/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *      security:
 *         - bearerAuth: []
 *      summary: Get the category by id
 *      tags: [Category]
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The category id
 *      responses:
 *          200:
 *              description: The category was deleted
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Category'
 *          400:
 *              description: The category was not found
 */

/**
 * @swagger
 * /categories/{id}:
 *  put:
 *      security:
 *         - bearerAuth: []
 *      summary: Get the category by id
 *      tags: [Category]
 *      requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Category'
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The category id
 *      responses:
 *          200:
 *              description: The category was updated
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Category'
 *          400:
 *              description: The category was not found
 */

CategoryRoutes.post(
  //OK
  "/categories",
  new UserAuthMiddleware().handle,
  new CreateCategoryController().handle
);
CategoryRoutes.get(
  //OK
  "/categories",
  new UserAuthMiddleware().handle,
  new GetAllCategoriesController().handle
);
CategoryRoutes.delete(
  //ok
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new DeleteCategoryController().handle
);
CategoryRoutes.put(
  //ok
  "/categories/:id",
  new UserAuthMiddleware().handle,
  new UpdateCategoryController().handle
);

export default CategoryRoutes;

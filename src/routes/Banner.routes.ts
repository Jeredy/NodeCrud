import { Router } from "express";
import { CreateBannerController } from "../controllers/CreateBannerController";
import { GetAllBannersController } from "../controllers/GetAllBannersController";
import { UserAuthMiddleware } from "../middleware/auth";

const BannerRoutes = Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Banner:
 *        type: object
 *        required:
 *          - title
 *          - description
 *          - link
 *        properties:
 *          id:
 *             type: string
 *             description: The auto-generated id of Auth
 *          title:
 *              type: string
 *              description: The banner title
 *          description:
 *              type: string
 *              description: The banner description
 *          link:
 *              type: string
 *              description: The banner link
 *        example:
 *          id: asd9283_adcb
 *          title: New Movies 2023
 *          description: The most featured movies of 2023
 *          link: http://(url)
 */

/**
 * @swagger
 * /banners:
 *  get:
 *      security:
 *         - bearerAuth: []
 *      summary: Authenticate the user
 *      tags: [Banner]
 *      responses:
 *          200:
 *              description: The user is authenticated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Banner'
 */

/**
 * @swagger
 * /banners:
 *  post:
 *      security:
 *         - bearerAuth: []
 *      summary: Create a new banner
 *      tags: [Banner]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Banner'
 *      responses:
 *          200:
 *              description: The banner was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Banner'
 *          400:
 *              description: The params are invalid
 */

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

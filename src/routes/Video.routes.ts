import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";
import { GetVideoByCategoryController } from "../controllers/GetVideoByCategoryController";
import { GetVideoController } from "../controllers/GetVideoController";
import { UserAuthMiddleware } from "../middleware/auth";

const VideoRoutes = Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Video:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - image
 *          - duration
 *          - rate
 *          - year
 *          - category_id
 *        properties:
 *          id:
 *             type: string
 *             description: The auto-generated id of video
 *          name:
 *              type: string
 *              description: The video name
 *          description:
 *              type: string
 *              description: The video description
 *          image:
 *              type: string
 *              description: The video image
 *          duration:
 *              type: number
 *              description: The video duration
 *          rate:
 *              type: number
 *              description: The video rate
 *          year:
 *              type: number
 *              description: The video year
 *          category_id:
 *              type: string
 *              description: The foreign apk to categories
 *        example:
 *          id: asd9283_adcb
 *          name: Comedy
 *          description: Funny Movies
 *          image: http:(url)
 *          duration: 190
 *          rate: 4
 *          year: 2023
 *          category_id: kfdjdfDFV_sksmd
 */

/**
 * @swagger
 * /videos:
 *  post:
 *      security:
 *         - bearerAuth: []
 *      summary: Create a new video
 *      tags: [Video]
 *      requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Video'
 *      responses:
 *          200:
 *              description: The video was successfuly created
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Video'
 *          400:
 *              description: Error while creating the video
 */

/**
 * @swagger
 * /videos/{id}:
 *  get:
 *      security:
 *         - bearerAuth: []
 *      summary: Get the video by id
 *      tags: [Video]
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The video id
 *      responses:
 *          200:
 *              description: The video description by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Video'
 *          400:
 *              description: The video was not found
 */

/**
 * @swagger
 * /videos:
 *  get:
 *      security:
 *         - bearerAuth: []
 *      summary: Get all videos
 *      tags: [Video]
 *      responses:
 *          200:
 *              description: The video description by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Video'
 *          400:
 *              description: The params are wrong
 */

/**
 * @swagger
 * /videos/categoryId/{id}:
 *  get:
 *      security:
 *         - bearerAuth: []
 *      summary: Get videos by category id
 *      tags: [Video]
 *      requestBody:
 *           required: true
 *           content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/Video'
 *      parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The video id
 *      responses:
 *          200:
 *              description: Videos description by category id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Video'
 *          400:
 *              description: The videos wasn't not found
 */

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

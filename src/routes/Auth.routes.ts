import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/CreateUserController";

const AuthRoutes = Router();

/**
 * @swagger
 * components:
 *    schemas:
 *      Auth:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          id:
 *             type: string
 *             description: The auto-generated id of Auth
 *          username:
 *              type: string
 *              description: The username
 *          password:
 *              type: string
 *              description: The password
 *        example:
 *          id: asd9283_adcb
 *          username: Andre
 *          password: Andre1234
 */

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Authenticate the user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: The user is authenticated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Auth'
 *          400:
 *              description: Username or password is invalid
 */

/**
 * @swagger
 * /createUser:
 *  post:
 *      summary: Create a new user
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: The user was created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          $ref: '#/components/schemas/Auth'
 *          400:
 *              description: The params are invalid
 */

AuthRoutes.post("/login", new AuthController().handle);
AuthRoutes.post("/createUser", new UserController().handle);

export default AuthRoutes;

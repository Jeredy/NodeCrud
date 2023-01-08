import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/CreateUserController";

const AuthRoutes = Router();

AuthRoutes.post("/login", new AuthController().handle);
AuthRoutes.post("/createUser", new UserController().handle);

export default AuthRoutes;

import { Router } from "express";
import { CreateUserController } from "src/modules/users/CreateUserController";
import { GetAllUsersController } from 'src/modules/users/GetAllUsersController';
import { AuthController } from "src/auth/authController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const authController = new AuthController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.post("/login", authController.handle);

export { userRoutes };
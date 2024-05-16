import { Router } from "express";
import { CreateUserController } from "src/modules/users/CreateUserController";
import { GetAllUsersController } from 'src/modules/users/GetAllUsersController';
import { AuthController } from "src/auth/authController";
import { DeleteUserController } from 'src/modules/users/DeleteUserController';

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const authController = new AuthController();
const deleteUserController = new DeleteUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.post("/login", authController.handle);
userRoutes.delete("/:id", deleteUserController.handle);

export { userRoutes };
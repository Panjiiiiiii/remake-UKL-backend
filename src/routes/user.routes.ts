import { Router } from "express";
import { errorHandler } from "../error-handler";
import { authorization } from "../middlewares/authorization";
import { adminMiddleware } from "../middlewares/role-validation";
import { getAllCustomer } from "../controllers/user.controller";

const userRoutes:Router = Router()

userRoutes.get('/', [authorization,adminMiddleware], errorHandler(getAllCustomer))

export default userRoutes
import { Router } from "express";
import { errorHandler } from "../error-handler";
import { authorization } from "../middlewares/authorization";
import { adminMiddleware, cashierMiddleware, kitchenMiddleware } from "../middlewares/role-validation";
import { getAllCustomer, getCustomerByID } from "../controllers/user.controller";

const userRoutes:Router = Router()

userRoutes.get('/', [authorization,adminMiddleware], errorHandler(getAllCustomer))
userRoutes.get('/:id', [authorization,adminMiddleware] , errorHandler(getCustomerByID))

export default userRoutes
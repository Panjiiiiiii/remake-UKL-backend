import { Router } from "express";
import { authorization } from "../middlewares/authorization";
import { adminMiddleware } from "../middlewares/role-validation";
import { createMenu, getAllMenu } from "../controllers/menu.controller";
import { errorHandler } from "../error-handler";

const menuRoutes:Router = Router()

menuRoutes.post('/', [authorization, adminMiddleware], errorHandler(createMenu))
menuRoutes.get('/', errorHandler(getAllMenu))

export default menuRoutes
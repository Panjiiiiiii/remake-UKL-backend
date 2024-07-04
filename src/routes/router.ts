import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import menuRoutes from "./menu.routes";

const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/user', userRoutes)
rootRouter.use('/menu', menuRoutes)

export default rootRouter
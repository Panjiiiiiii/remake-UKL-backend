import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes)
rootRouter.use('/user', userRoutes)

export default rootRouter
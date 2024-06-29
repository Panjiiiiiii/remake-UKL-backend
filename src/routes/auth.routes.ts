import { Router } from "express";
import { Login, SignUp, me } from "../controllers/auth.controller";
import { errorHandler } from "../error-handler";

const authRoutes:Router = Router()

authRoutes.post('/signup', errorHandler(SignUp))
authRoutes.post('/login',errorHandler(Login))
authRoutes.post('/me',errorHandler(me))

export default authRoutes
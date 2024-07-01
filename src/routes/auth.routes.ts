import { Router } from "express";
import { Login, SignUp} from "../controllers/auth.controller";
import { errorHandler } from "../error-handler";

const authRoutes:Router = Router()

authRoutes.post('/signup', errorHandler(SignUp))
authRoutes.post('/login',errorHandler(Login))

export default authRoutes
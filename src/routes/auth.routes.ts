import { Router } from "express";
import { Login, SignUp, me} from "../controllers/auth.controller";
import { errorHandler } from "../error-handler";
import { authorization } from "../middlewares/authorization";

const authRoutes:Router = Router()

authRoutes.post('/signup', errorHandler(SignUp))
authRoutes.post('/login',errorHandler(Login))
authRoutes.get('/me', [authorization], errorHandler(me))

export default authRoutes
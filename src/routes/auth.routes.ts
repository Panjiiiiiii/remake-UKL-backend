import { Router } from "express";
import { SignUp } from "../controllers/auth.controller";

const userRoutes:Router = Router()

userRoutes.post('/signup', SignUp)

export default userRoutes
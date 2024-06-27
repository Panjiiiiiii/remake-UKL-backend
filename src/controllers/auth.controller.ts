import { NextFunction, Request, Response } from "express"
import * as jwt from 'jsonwebtoken'
import {hashSync, compareSync} from 'bcrypt'
import {JWT_SECRET} from '../secret'
import { prismaClient } from ".."
import { ErrorCode } from "../errors/errorException"
import { SignUpSchema } from "../schema/auth.schema"
import { ZodError } from "zod"
import { BadRequestException } from "../errors/bad-request"

export const SignUp = async (req:Request, res:Response, next:NextFunction) => {
    try {        
        SignUpSchema.parse(req.body)
        const {name,email,password} = req.body
        let user = await prismaClient.user.findFirst({where:{email}})
        if(user){
            throw new BadRequestException('USER ALREADY EXISTS', ErrorCode.BAD_REQUEST)
        }
        let newUser = await prismaClient.user.create({
            data : {
                name,
                email,
                password: hashSync(password, 10)
            }
        })
        console.log(newUser)
        res.json({
            sucsess: true,
            data : newUser,
            statusCode : 200,
            message : "Sign up sucsess"
        }) 
    } catch (error) {
        if(error instanceof ZodError){
            res.json({
                ZodError
            })
        }
        console.log(error)
    }
}
export const Login = async (req:Request, res:Response, next:NextFunction) => {

}
export const Me = async (req:Request, res:Response, next:NextFunction) => {

}
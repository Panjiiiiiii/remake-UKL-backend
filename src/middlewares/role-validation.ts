import { NextFunction,Request, Response } from "express";
import { ErrorCode } from "../errors/errorException";
import { forbiddenException } from "../errors/forbidden";

//is admin
export const adminMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user
    if(user?.role === 'ADMIN'){
        next()
    } else {
        throw new forbiddenException('Forbidden!', ErrorCode.FORBIDDEN)
    }
} 

export const customerMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user
    if(user?.role === 'CUSTOMER'){
        next()
    } else {
        throw new forbiddenException('Forbidden!', ErrorCode.FORBIDDEN)
    }
}

export const cashierMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user
    if(user?.role === 'CASHIER'){
        next()
    } else {
        throw new forbiddenException('Forbidden!', ErrorCode.FORBIDDEN)
    }
} 

export const kitchenMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user
    if(user?.role === 'KITCHEN'){
        next()
    } else {
        throw new forbiddenException('Forbidden!', ErrorCode.FORBIDDEN)
    }
} 
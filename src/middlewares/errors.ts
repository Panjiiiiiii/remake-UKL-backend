import { NextFunction, Request, Response } from "express";
import { HttpException } from "../errors/errorException";

export const errorMiddleware = (error: HttpException, req:Request, res:Response, next:NextFunction) => {
    return res.status(error.statusCode).json({
        message: error.message,
        errorCode: error.errorCode,
        errors: error.errors
    })
}
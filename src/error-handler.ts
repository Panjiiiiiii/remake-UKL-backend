import { NextFunction, Request, Response } from "express";
import { ErrorCode, HttpException } from "./errors/errorException";
import { InternalException } from "./errors/internal-exception";
import { BadRequestException } from "./errors/bad-request";
import { ZodError } from "zod";

export const errorHandler = (method: Function) => {
    return async(req:Request, res:Response, next:NextFunction) => {
        try {
            await method(req,res,next)
        } catch (error: any) {
            let exception: HttpException
            if(error instanceof HttpException) {
                exception = error
            } else {
                if(error instanceof ZodError) {
                    exception  = new BadRequestException('Unprocessable entity', ErrorCode.UNPROCESSABLE_ENTITY, error)
                } else {
                    exception = new InternalException('Something went wrong', error, ErrorCode.INTERNAL_ERROR)
                }
            }
            next(exception)
        }
    }
}


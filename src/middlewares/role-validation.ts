import { NextFunction,Request, Response } from "express";

//is admin
export const adminMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const user = req.user
    return res.json(user)
} 
//is customer
//is cahsier
//is kitchen
import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../errors/unauthorized";
import { ErrorCode } from "../errors/errorException";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { prismaClient } from "..";

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  try {    
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if(authHeader){
      const token = authHeader.split(" ")[1]
      // console.log(token)
      const payload = jwt.sign(token, JWT_SECRET) as any
      // console.log(payload)
      const user = await prismaClient.user.findFirst({
        where : {
          id : payload.userId
        }
      })
      console.log(user)
      if(!user) {
        next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
      }
      next()
    } else {
      next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
    }
  } catch (error) {
    next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
  }
};

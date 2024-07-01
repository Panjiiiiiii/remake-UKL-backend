import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../errors/unauthorized";
import { ErrorCode } from "../errors/errorException";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { prismaClient } from "..";

export const authorization = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization!;
  if (!token) {
    next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any
    const user = await prismaClient.user.findFirst({
      where: 
      {id: payload.userId}
    })  
    if(!user){
      next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
    }    
  } catch (error) {
    next(new UnauthorizedException('User unauthorized', ErrorCode.UNAUTHORIZED))
  }
};

import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { ErrorCode } from "../errors/errorException";
import { NotFoundException } from "../errors/not-found";

export const getAllCustomer = async (req: Request, res: Response) => {
  const user = await prismaClient.user.findMany({
    where: {
      role: "CUSTOMER",
    },
  });
  console.log(user);
  return res.status(200).json({
    status: "success",
    data: user,
    message: "Datas have been loaded",
  });
};

export const getCustomerByID = async(req:Request, res:Response, next:NextFunction) => {
    const user = await prismaClient.user.findFirst({
        where : {
            id : +req.params.id
        }
    })
    if(!user){
        throw new NotFoundException("User not found", ErrorCode.USER_NOT_FOUND);
    }
    return res.status(200).json({
        status: "success",
        data: user,
        message: "Datas have been loaded",
    })
}
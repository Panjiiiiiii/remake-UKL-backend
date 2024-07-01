import { Request, Response} from "express";
import { prismaClient } from "..";

export const getAllCustomer = async(req:Request, res:Response) => {
    const user = await prismaClient.user.findMany({
        where : {
            role : 'CUSTOMER'
        }
    })
    console.log(user)
    return res.status(200).json({
        status : 'success',
        data : user,
        message : 'Datas have been loaded'
    })
}
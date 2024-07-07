import { Request, Response, NextFunction } from "express";
import { prismaClient } from "..";
import { upload } from "../utils/multerconfig";
import { BadRequestException } from "../errors/bad-request";
import { ErrorCode } from "../errors/errorException";

export const getAllMenu = async (req: Request,res: Response,next: NextFunction) => {
  const count = await prismaClient.menu.count();
  const skip = req.query.skip?.toString() || 0;
  const menu = await prismaClient.menu.findMany({
    skip: +skip,
    take: 5,
  });
  return res.status(200).json({
    status: "success",
    count: count,
    data: {
      menu,
    },
    message: "Datas have been loaded",
  });
};
export const getMenuByID = async (req: Request,res: Response,next: NextFunction) => {};
export const createMenu = async (req: Request, res: Response,next: NextFunction) => {
    const newMenu = {
        name : req.body.name,
        description : req.body.description,
        photo : req.body.photo,
        categories : req.body.categories,
        tags : req.body.tags,
        price : +req.body.price
    }
    console.log(newMenu)
//   const menu = await prismaClient.menu.create({
//     data: newMenu
//   });
//   console.log(menu);
//   return res.status(200).json({
//     status: "success",
//     data: menu,
//     message: "Datas have been loaded",
//   });
};
const updateMenu = async (req: Request,res: Response,next: NextFunction) => {};
const editMenu = async (req: Request, res: Response, next: NextFunction) => {};
const deleteMenu = async (req: Request,res: Response,next: NextFunction) => {};

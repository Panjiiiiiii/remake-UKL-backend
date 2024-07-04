import {Request, Response, NextFunction } from "express";
import { prismaClient } from "..";

export const getAllMenu = async(req:Request, res:Response, next:NextFunction) => {
    const count = await prismaClient.menu.count();
    const skip = req.query.skip?.toString() || 0
    const menu = await prismaClient.menu.findMany({
        skip: +skip,
        take : 5
    })
    return res.status(200).json({
        status: "success",
        count: count,
        data: {
            menu
        },
        message: "Datas have been loaded",
    })
}
export const getMenuByID = async(req:Request, res:Response, next:NextFunction) => {

}
export const createMenu = async(req:Request, res:Response, next:NextFunction) => {
    const menu = await prismaClient.menu.create({
        data : {
            ...req.body,
            tags : req.body.tags.join(",")
        }
    })
    return res.status(200).json({
        status: "success",
        data: menu,
        message: "Datas have been loaded",
    })
}
const updateMenu = async(req:Request, res:Response, next:NextFunction) => {

}
const editMenu = async(req:Request, res:Response, next:NextFunction) => {

}
const deleteMenu = async(req:Request, res:Response, next:NextFunction) => {

}


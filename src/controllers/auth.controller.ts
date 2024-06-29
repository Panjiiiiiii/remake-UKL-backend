import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { hashSync, compareSync } from "bcrypt";
import { JWT_SECRET } from "../secret";
import { prismaClient } from "..";
import { ErrorCode } from "../errors/errorException";
import { LoginSchema, SignUpSchema} from "../schema/auth.schema";
import { BadRequestException } from "../errors/bad-request";
import { NotFoundException } from "../errors/not-found";

export const SignUp = async (req: Request,res: Response,next: NextFunction) => {
  SignUpSchema.parse(req.body);
  const { name, email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    throw new BadRequestException(
      "USER ALREADY EXISTS",
      ErrorCode.USER_ALREADY_EXISTS
    );
  }
  let newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10),
    },
  });
  return res.status(200).json({
    sucsess: true,
    data: newUser,
    message: "Sign up sucsess",
  });
};

export const Login = async (req: Request, res: Response) => {
  LoginSchema.parse(req.body);
  const { email, password } = req.body;
  const user = await prismaClient.user.findFirst({ where: { email } });
  if (!user) {
    throw new NotFoundException("User not found", ErrorCode.USER_NOT_FOUND);
  }
  if (!compareSync(password, user.password)) {
    throw new BadRequestException(
      "Incorrect password",
      ErrorCode.INCORRECT_PASSWORD
    );
  }
  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SECRET
  );
  return res.status(200).json({
    sucsess: true,
    data: { user, token },
    message: "Sign up sucsess",
  });
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json(req.user)
};

import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginService from "../services/login/login.service";
import loginUserSchema from "../schemas/login.schemas";
import AppError from "../errors/AppError";

export const loginController = async(req: Request, res: Response) => {
    const valid = await loginUserSchema.validate(req.body,{
        stripUnknown: true,
        abortEarly: false
    })

    const loginInfo: IUserLogin = valid;
    const loginData = await loginService(loginInfo);
    return res.status(200).json(loginData);
}


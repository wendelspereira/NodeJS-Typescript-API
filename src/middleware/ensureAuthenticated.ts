import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repository/implementations/UserRepository";
import {AppError} from '../errors/AppError'
interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization

    if(!authHeader){
        throw new AppError("Token missing")
    }

    const [, token] = authHeader.split(" ")
    
    try {
       const {sub: user_id} = verify(token, "79dd89f39b52c083b7a801278d584872") as IPayload
        
       const userRepository = new UserRepository()
       const user = await userRepository.findById(user_id)
        if(!user){
            throw new AppError("User doesn't exists!")
        }

        request.user = {
            id: user_id
        }

       next()
    } catch (error) {
        throw new AppError("Invalid token")
    }
}

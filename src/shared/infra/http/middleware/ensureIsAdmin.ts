import { UserRepository } from "@modules/accounts/repository/implementations/UserRepository";
import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";

async function ensureIsAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.user;

    const usersRepository = new UserRepository();

    const user = await usersRepository.findById(id);

    if (!user!.isAdmin) {
        throw new AppError("User isn`t admin!");
    }

   return next();
}

export { ensureIsAdmin };

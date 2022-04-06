import { IUserRepository } from "@modules/accounts/infra/typeorm/repository/IUserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from '@shared/errors/AppError';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IRequest) {
        //verificar se o user existe
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password is incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password is incorrect!");
        }

        const token = sign({}, "79dd89f39b52c083b7a801278d584872", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenResponse: IResponse = {
            user: {
                name: user.name,
                email,
            },
            token,
        };

        return tokenResponse;
    }
}

export { AuthenticateUserUseCase };

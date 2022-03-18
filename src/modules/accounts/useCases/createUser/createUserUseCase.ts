import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";
import { injectable, inject } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
        avatar
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new AppError("User Already exists!");
        }

        const passwordHash = await hash(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
            avatar
        });
    }
}

export { CreateUserUseCase };

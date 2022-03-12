import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repository/IUserRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({ ...data });
    }
}

export { CreateUserUseCase };

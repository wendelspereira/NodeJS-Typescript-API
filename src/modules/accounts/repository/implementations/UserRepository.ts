import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { getRepository } from "typeorm";
import { Repository } from "typeorm";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({email})
        return user
    }
}

export { UserRepository };

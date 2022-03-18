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
        id,
        avatar
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
            id,
            avatar
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({email})
        return user
    }
    async findById(id: string): Promise<User | undefined> {
        const user = await this.repository.findOne(id)
        return user
    }
}

export { UserRepository };

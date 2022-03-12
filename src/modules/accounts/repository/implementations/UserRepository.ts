import { IUserRepository} from "../IUserRepository";
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
        userName,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            userName,
            email,
            driver_license,
            password,
        });

        await this.repository.save(user);
    }
}

export { UserRepository };

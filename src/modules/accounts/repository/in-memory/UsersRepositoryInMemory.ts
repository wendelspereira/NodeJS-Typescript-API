import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../infra/typeorm/repository/IUserRepository";

class UsersRepositoryInMemory implements IUserRepository {
    users: User[] = [];

    async create({
        driver_license,
        name,
        email,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            driver_license,
            name,
            email,
            password,
        });

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.email === email)
        return user
    }

    async findById(id: string): Promise<User | undefined> {
        const user = this.users.find(user => user.id === id)
        return user
    }
}

export { UsersRepositoryInMemory };

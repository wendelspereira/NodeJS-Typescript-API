import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repository/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory
        );
    });

    it("Should be able to authenticate an user", async () => {
        await createUserUseCase.execute({
            name: "User Test",
            email: "email@test.com",
            password: "123456789",
            driver_license: "00000123",
        });

        const result = await authenticateUserUseCase.execute({
            email: "email@test.com",
            password: "123456789",
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an nonexists user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "email@test.com",
                password: "12345679",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate an incorrect password", async () => {
        const user: ICreateUserDTO = {
            name: "User Test",
            email: "email@test.com",
            password: "123456789",
            driver_license: "00000123",
        };

        await createUserUseCase.execute(user);

        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "email@test.com",
                password: "123456789",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});

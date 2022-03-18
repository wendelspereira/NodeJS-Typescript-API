import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/createUser/createUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password, email, driver_license, avatar } =
            request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name,
            password,
            driver_license,
            email,
            avatar
        });

        return response.status(201).send();
    }
}

export { CreateUserController };

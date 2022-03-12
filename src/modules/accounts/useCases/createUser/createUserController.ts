import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/createUser/createUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, userName, password, email, driver_license } =
            request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        await createUserUseCase.execute({
            name,
            userName,
            password,
            driver_license,
            email,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };

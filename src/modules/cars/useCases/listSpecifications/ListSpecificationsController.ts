import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { container } from "tsyringe";

class ListSpecificationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase);

        return response.send(await listSpecificationsUseCase.execute());
    }
}

export { ListSpecificationsController };

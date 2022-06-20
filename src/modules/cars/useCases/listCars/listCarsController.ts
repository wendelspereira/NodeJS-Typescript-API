import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarsUseCase } from "./listCarsUseCase";

interface IRequest {
    category_id?: string;
    name?: string;
    brand?: string;
}

class ListCarsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, brand, category_id}: IRequest = request.query
        const listCarsUseCase = container.resolve(ListCarsUseCase);
        const cars = await listCarsUseCase.execute({name, brand, category_id});
        return response.send(cars);
    }
}

export { ListCarsController };
    
import { Request, Response } from "express";
import { InputCategoryUseCase } from "./inputCategoryUseCase";
import { container } from "tsyringe";

class InputCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const inputCategoryUseCase = container.resolve(InputCategoryUseCase);
        await inputCategoryUseCase.execute(file);
        return response.send();
    }
}

export { InputCategoryController };

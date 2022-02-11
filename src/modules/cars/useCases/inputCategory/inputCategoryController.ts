import { Request, Response } from "express"
import { InputCategoryUseCase } from "./inputCategoryUseCase"



class InputCategoryController {
    constructor(private inputCategoryUseCase: InputCategoryUseCase){}
    handle(request: Request, response: Response): Response {
        const {file} = request
        this.inputCategoryUseCase.execute(file)
        return response.send()
    }
}

export {InputCategoryController}